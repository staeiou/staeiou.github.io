#!/usr/bin/env python3
"""
Comprehensive audit of all static assets for stuartgeiger.com migration
"""

import os
import hashlib
from pathlib import Path
from collections import defaultdict
import json

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

def audit_assets(root_dir):
    """Comprehensive audit of all static assets"""
    root_path = Path(root_dir)
    
    # Categories of files
    categories = {
        'documents': ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xls', '.xlsx', '.odt', '.rtf'],
        'images': ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp', '.bmp', '.tiff'],
        'fonts': ['.ttf', '.woff', '.woff2', '.eot', '.otf'],
        'media': ['.mp4', '.mp3', '.wav', '.ogg', '.webm', '.avi', '.mov'],
        'archives': ['.zip', '.tar', '.gz', '.bz2', '.7z', '.rar'],
        'data': ['.csv', '.json', '.xml', '.yaml', '.yml', '.bib'],
        'web': ['.html', '.htm', '.css', '.js', '.map'],
        'notebooks': ['.ipynb']
    }
    
    all_files = defaultdict(list)
    duplicates = defaultdict(list)
    
    print("Scanning filesystem...")
    
    # Scan all files
    for file_path in root_path.rglob('*'):
        if file_path.is_file():
            # Skip certain directories
            if any(skip in str(file_path) for skip in ['_site/', 'vendor/', '.git/', 'node_modules/']):
                continue
            
            rel_path = str(file_path.relative_to(root_path))
            ext = file_path.suffix.lower()
            
            # Categorize file
            file_category = 'other'
            for cat, extensions in categories.items():
                if ext in extensions:
                    file_category = cat
                    break
            
            # Calculate hash for potential duplicate detection
            if ext not in ['.md', '.html', '.htm', '.txt', '.yml', '.yaml', '.json', '.xml']:  # Skip text files for hash
                file_hash = get_file_hash(file_path)
                if file_hash:
                    duplicates[file_hash].append(rel_path)
            
            all_files[file_category].append(rel_path)
    
    # Generate report
    print("\n" + "="*70)
    print("ASSET INVENTORY REPORT FOR STUARTGEIGER.COM")
    print("="*70)
    
    # Summary by category
    print("\nFILE CATEGORIES:")
    total_files = 0
    for cat in ['documents', 'images', 'fonts', 'media', 'archives', 'data', 'web', 'notebooks', 'other']:
        if cat in all_files:
            count = len(all_files[cat])
            total_files += count
            print(f"  {cat:12} {count:5} files")
    
    print(f"\nTotal: {total_files} files")
    
    # Find actual duplicates
    duplicate_sets = {k: v for k, v in duplicates.items() if len(v) > 1}
    
    print("\n" + "="*70)
    print(f"DUPLICATE FILES: Found {len(duplicate_sets)} sets of duplicates")
    print("="*70)
    
    duplicate_report = {}
    total_wasted_space = 0
    
    for hash_val, files in duplicate_sets.items():
        # Get file size
        first_file = os.path.join(root_dir, files[0])
        file_size = os.path.getsize(first_file) if os.path.exists(first_file) else 0
        wasted_space = file_size * (len(files) - 1)
        total_wasted_space += wasted_space
        
        duplicate_report[hash_val] = {
            'files': files,
            'size': file_size,
            'wasted_space': wasted_space
        }
        
        # Determine file type
        ext = Path(files[0]).suffix.lower()
        
        print(f"\n{ext} files (Hash: {hash_val[:8]}...):")
        print(f"  Size: {file_size:,} bytes each, {wasted_space:,} bytes wasted")
        for f in sorted(files):
            print(f"    - {f}")
    
    print(f"\nTotal wasted space from duplicates: {total_wasted_space:,} bytes ({total_wasted_space/1024/1024:.1f} MB)")
    
    # Check for potential legacy files
    print("\n" + "="*70)
    print("POTENTIAL LEGACY FILES FROM OLD SITE:")
    print("="*70)
    
    legacy_patterns = [
        ('WordPress exports', 'wordpress/'),
        ('Old image uploads', 'images/20'),  # Year-based folders
        ('Temporary/test files', ['test', 'temp', 'tmp', 'backup']),
        ('Development files', ['.orig', '.bak', '~', '.swp']),
    ]
    
    for desc, pattern in legacy_patterns:
        legacy_files = []
        
        if isinstance(pattern, str):
            # Directory pattern
            legacy_files = [f for cat in all_files.values() for f in cat if pattern in f]
        else:
            # Extension/name patterns
            for pat in pattern:
                legacy_files.extend([f for cat in all_files.values() for f in cat 
                                   if pat in f.lower()])
        
        if legacy_files:
            print(f"\n{desc}: {len(legacy_files)} files")
            for f in legacy_files[:5]:  # Show first 5
                print(f"  - {f}")
            if len(legacy_files) > 5:
                print(f"  ... and {len(legacy_files)-5} more")
    
    # Save full report
    report = {
        'summary': {cat: len(files) for cat, files in all_files.items()},
        'duplicates': duplicate_report,
        'total_files': total_files,
        'duplicate_sets': len(duplicate_sets),
        'wasted_space_bytes': total_wasted_space
    }
    
    with open('asset_audit_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print("\n" + "="*70)
    print("Full report saved to asset_audit_report.json")
    
    return duplicate_report

def main():
    root_dir = '/home/jupyter-staeiou/academicpages.github.io'
    os.chdir(root_dir)
    
    duplicates = audit_assets(root_dir)
    
    print("\n" + "="*70)
    print("RECOMMENDED ACTIONS:")
    print("="*70)
    print("1. Remove duplicate files to save space")
    print("2. Update _redirects file for any removed duplicates")
    print("3. Check legacy files and remove if not needed")
    print("4. Consider optimizing large images")

if __name__ == "__main__":
    main()