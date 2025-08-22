#!/usr/bin/env python3
"""
Deduplicate static assets and create redirects for stuartgeiger.com
"""

import os
import hashlib
import json
from pathlib import Path
from collections import defaultdict

def get_file_hash(filepath):
    """Calculate SHA1 hash of a file"""
    sha1 = hashlib.sha1()
    with open(filepath, 'rb') as f:
        while chunk := f.read(8192):
            sha1.update(chunk)
    return sha1.hexdigest()

def find_duplicates(root_dir):
    """Find duplicate files by hash"""
    root_path = Path(root_dir)
    duplicates = defaultdict(list)
    
    # Find all PDFs and PPTs, excluding _site and vendor
    for ext in ['*.pdf', '*.ppt', '*.pptx']:
        for file in root_path.rglob(ext):
            if '_site' not in str(file) and 'vendor' not in str(file):
                file_hash = get_file_hash(file)
                rel_path = str(file.relative_to(root_path))
                duplicates[file_hash].append(rel_path)
    
    # Filter to only show actual duplicates
    return {k: v for k, v in duplicates.items() if len(v) > 1}

def create_redirect_map(duplicates):
    """Create a redirect map keeping the most descriptive filename"""
    redirects = {}
    
    for hash_val, files in duplicates.items():
        # Sort by path depth (prefer files in root or direct subdirs)
        # Then by name length (longer names are usually more descriptive)
        sorted_files = sorted(files, key=lambda x: (x.count('/'), -len(x)))
        
        # Keep the first one as canonical
        canonical = sorted_files[0]
        
        # Create redirects for others
        for duplicate in sorted_files[1:]:
            redirects[duplicate] = canonical
            print(f"Redirect: /{duplicate} -> /{canonical}")
    
    return redirects

def main():
    root_dir = '/home/jupyter-staeiou/academicpages.github.io'
    
    print("Finding duplicate files...")
    duplicates = find_duplicates(root_dir)
    
    print(f"\nFound {len(duplicates)} sets of duplicate files:")
    for hash_val, files in duplicates.items():
        print(f"\nHash: {hash_val[:8]}...")
        for file in files:
            size = os.path.getsize(os.path.join(root_dir, file))
            print(f"  - {file} ({size:,} bytes)")
    
    print("\n" + "="*60)
    print("Creating redirect map...")
    redirect_map = create_redirect_map(duplicates)
    
    # Save redirect map as JSON
    with open(os.path.join(root_dir, 'duplicate_redirects.json'), 'w') as f:
        json.dump(redirect_map, f, indent=2)
    
    print(f"\nSaved {len(redirect_map)} redirects to duplicate_redirects.json")
    
    # Files to remove (duplicates)
    print("\n" + "="*60)
    print("Files that can be removed (keeping canonical versions):")
    for duplicate, canonical in redirect_map.items():
        print(f"  rm {duplicate}")

if __name__ == "__main__":
    main()