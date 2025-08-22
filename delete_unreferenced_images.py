#!/usr/bin/env python3
"""
Delete all unreferenced images from the repository
"""

import os
from pathlib import Path

def delete_unreferenced_images():
    """Delete all unreferenced images listed in unreferenced_images.txt"""
    
    root_dir = '/home/jupyter-staeiou/academicpages.github.io'
    
    # Read the list of unreferenced images
    with open('unreferenced_images.txt', 'r') as f:
        unreferenced_images = [line.strip() for line in f if line.strip()]
    
    print(f"Found {len(unreferenced_images)} unreferenced images to delete")
    print("="*60)
    
    deleted_count = 0
    deleted_size = 0
    
    for img_path in unreferenced_images:
        full_path = os.path.join(root_dir, img_path)
        
        if os.path.exists(full_path):
            try:
                # Get file size before deletion
                file_size = os.path.getsize(full_path)
                
                # Delete the file
                os.remove(full_path)
                
                deleted_count += 1
                deleted_size += file_size
                
                print(f"✓ Deleted: {img_path} ({file_size:,} bytes)")
                
            except Exception as e:
                print(f"✗ Error deleting {img_path}: {e}")
        else:
            print(f"⚠ File not found: {img_path}")
    
    # Clean up empty directories
    print("\n" + "="*60)
    print("Cleaning up empty directories...")
    
    # Get all directories that contained images
    dirs_to_check = set()
    for img_path in unreferenced_images:
        dir_path = os.path.dirname(os.path.join(root_dir, img_path))
        dirs_to_check.add(dir_path)
    
    # Sort dirs by depth (deepest first) to clean up properly
    sorted_dirs = sorted(dirs_to_check, key=lambda x: x.count('/'), reverse=True)
    
    removed_dirs = 0
    for dir_path in sorted_dirs:
        if os.path.exists(dir_path) and os.path.isdir(dir_path):
            try:
                # Only remove if empty
                if not os.listdir(dir_path):
                    os.rmdir(dir_path)
                    print(f"✓ Removed empty directory: {dir_path}")
                    removed_dirs += 1
            except:
                pass  # Directory not empty or other error
    
    print("\n" + "="*60)
    print("DELETION SUMMARY")
    print("="*60)
    print(f"Files deleted: {deleted_count}/{len(unreferenced_images)}")
    print(f"Space freed: {deleted_size:,} bytes ({deleted_size/1024/1024:.1f} MB)")
    print(f"Empty directories removed: {removed_dirs}")

if __name__ == "__main__":
    delete_unreferenced_images()