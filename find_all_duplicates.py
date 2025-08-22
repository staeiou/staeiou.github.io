#!/usr/bin/env python3
"""
Find ALL duplicate static assets (images, documents, media, etc.)
"""

import os
import hashlib
from pathlib import Path
from collections import defaultdict

# Define all static asset extensions to check
STATIC_EXTENSIONS = [
    # Documents
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.odt', '.ods', '.odp', '.rtf', '.tex', '.txt',
    
    # Images
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp',
    '.bmp', '.tiff', '.tif',
    
    # Media
    '.mp4', '.webm', '.mp3', '.wav', '.ogg', '.avi', '.mov',
    
    # Archives
    '.zip', '.tar', '.gz', '.bz2', '.7z', '.rar',
    
    # Data files
    '.csv', '.json', '.xml', '.yaml', '.yml',
    
    # Web assets
    '.woff', '.woff2', '.ttf', '.eot', '.otf',  # Fonts
    '.js', '.css',  # Could have duplicates from different sources
    
    # Other
    '.bib', '.ipynb'
]

def get_file_hash(filepath):
    """Calculate SHA1 hash of a file"""
    sha1 = hashlib.sha1()
    try:
        with open(filepath, 'rb') as f:
            while chunk := f.read(8192):
                sha1.update(chunk)
        return sha1.hexdigest()
    except:
        return None

def find_all_duplicates(root_dir):
    """Find duplicate files by hash across all static asset types"""
    root_path = Path(root_dir)
    
    # Group files by extension
    files_by_ext = defaultdict(list)
    duplicates_by_ext = defaultdict(lambda: defaultdict(list))
    
    print("Scanning for files...")
    for ext in STATIC_EXTENSIONS:
        pattern = f'*{ext}'
        for file in root_path.rglob(pattern):
            # Skip generated and vendor directories
            if any(skip in str(file) for skip in ['_site', 'vendor', '.git', 'node_modules']):
                continue
            
            files_by_ext[ext].append(file)
            
            # Calculate hash
            file_hash = get_file_hash(file)
            if file_hash:
                rel_path = str(file.relative_to(root_path))
                duplicates_by_ext[ext][file_hash].append(rel_path)
    
    # Report findings
    print("\n" + "="*60)
    print("FILE INVENTORY:")
    print("="*60)
    
    total_files = 0
    total_duplicates = 0
    
    for ext in sorted(files_by_ext.keys()):
        if files_by_ext[ext]:
            count = len(files_by_ext[ext])
            total_files += count
            
            # Count duplicates for this extension
            dup_count = 0
            for hash_val, files in duplicates_by_ext[ext].items():
                if len(files) > 1:
                    dup_count += len(files) - 1
            
            total_duplicates += dup_count
            
            if dup_count > 0:
                print(f"{ext:15} {count:4} files ({dup_count} duplicates)")
            else:
                print(f"{ext:15} {count:4} files")
    
    print(f"\nTotal: {total_files} files ({total_duplicates} duplicates)")
    
    # Show actual duplicates
    print("\n" + "="*60)
    print("DUPLICATE FILES:")
    print("="*60)
    
    all_duplicates = {}
    
    for ext in sorted(duplicates_by_ext.keys()):
        has_duplicates = False
        for hash_val, files in duplicates_by_ext[ext].items():
            if len(files) > 1:
                has_duplicates = True
                all_duplicates[hash_val] = files
        
        if has_duplicates:
            print(f"\n{ext} duplicates:")
            for hash_val, files in duplicates_by_ext[ext].items():
                if len(files) > 1:
                    print(f"\n  Hash: {hash_val[:8]}...")
                    for file in sorted(files):
                        size = os.path.getsize(os.path.join(root_dir, file))
                        print(f"    - {file} ({size:,} bytes)")
    
    return all_duplicates

def main():
    root_dir = '/home/jupyter-staeiou/academicpages.github.io'
    os.chdir(root_dir)
    
    duplicates = find_all_duplicates(root_dir)
    
    # Save complete duplicate list
    import json
    with open('all_duplicates.json', 'w') as f:
        json.dump(duplicates, f, indent=2)
    
    print(f"\n\nSaved complete duplicate list to all_duplicates.json")
    print(f"Found {len(duplicates)} sets of duplicate files across all types")

if __name__ == "__main__":
    main()