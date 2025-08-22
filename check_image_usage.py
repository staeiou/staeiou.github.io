#!/usr/bin/env python3
"""
Check which images in the images/ directory are actually referenced in the site
"""

import os
import re
from pathlib import Path

def find_image_references(root_dir):
    """Find all references to images in content files"""
    root_path = Path(root_dir)
    referenced_images = set()
    
    # Patterns to search for image references
    patterns = [
        r'src=["\']([^"\']+)["\']',
        r'href=["\']([^"\']+)["\']',
        r'!\[.*?\]\(([^)]+)\)',  # Markdown images
        r'url\(["\']?([^"\')\s]+)["\']?\)',  # CSS urls
        r'background:[^;]*url\(["\']?([^"\')\s]+)["\']?\)',
        r'image:\s*["\']?([^"\'>\s]+)',  # YAML front matter
        r'avatar:\s*["\']?([^"\'>\s]+)',  # Avatar in config
        r'og_image:\s*["\']?([^"\'>\s]+)',  # Open Graph
    ]
    
    # File extensions to search
    search_extensions = ['.md', '.html', '.yml', '.yaml', '.css', '.scss', '.js']
    
    print("Searching for image references...")
    
    for ext in search_extensions:
        for file_path in root_path.rglob(f'*{ext}'):
            # Skip _site and vendor
            if '_site' in str(file_path) or 'vendor' in str(file_path):
                continue
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                    for pattern in patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE)
                        for match in matches:
                            # Clean up the match
                            img = match.strip()
                            
                            # Skip external URLs
                            if img.startswith('http://') or img.startswith('https://'):
                                continue
                            
                            # Remove leading slashes and base path variables
                            img = img.replace('{{ base_path }}', '')
                            img = img.replace('{{ site.baseurl }}', '')
                            img = img.lstrip('/')
                            
                            # Add to referenced set if it's an image
                            if any(img.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp']):
                                referenced_images.add(img)
                            
                            # Also check if it's a path containing 'images/'
                            if 'images/' in img:
                                referenced_images.add(img)
            except Exception as e:
                pass
    
    return referenced_images

def find_all_images(root_dir):
    """Find all image files in the repository"""
    root_path = Path(root_dir)
    all_images = set()
    
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.webp', '.bmp', '.tiff']
    
    for ext in image_extensions:
        for img_path in root_path.rglob(f'*{ext}'):
            # Skip _site and vendor
            if '_site' not in str(img_path) and 'vendor' not in str(img_path):
                rel_path = str(img_path.relative_to(root_path))
                all_images.add(rel_path)
    
    return all_images

def main():
    root_dir = '/home/jupyter-staeiou/academicpages.github.io'
    
    # Find all images
    all_images = find_all_images(root_dir)
    
    # Find referenced images
    referenced_images = find_image_references(root_dir)
    
    # Filter to just images/ directory
    images_dir_files = {img for img in all_images if img.startswith('images/')}
    referenced_in_images = {img for img in referenced_images if img.startswith('images/')}
    
    # Find unreferenced images
    unreferenced = images_dir_files - referenced_in_images
    
    print("\n" + "="*70)
    print("IMAGE USAGE REPORT")
    print("="*70)
    
    print(f"\nTotal images in images/ directory: {len(images_dir_files)}")
    print(f"Referenced images: {len(referenced_in_images)}")
    print(f"Unreferenced images: {len(unreferenced)}")
    
    if referenced_in_images:
        print("\n" + "="*70)
        print("REFERENCED IMAGES (keeping these):")
        print("="*70)
        for img in sorted(referenced_in_images)[:20]:
            print(f"  ✓ {img}")
        if len(referenced_in_images) > 20:
            print(f"  ... and {len(referenced_in_images)-20} more")
    
    if unreferenced:
        print("\n" + "="*70)
        print("UNREFERENCED IMAGES (can potentially delete):")
        print("="*70)
        
        # Group by directory
        by_dir = {}
        for img in unreferenced:
            dir_name = os.path.dirname(img)
            if dir_name not in by_dir:
                by_dir[dir_name] = []
            by_dir[dir_name].append(os.path.basename(img))
        
        # Calculate total size
        total_size = 0
        for img in unreferenced:
            try:
                size = os.path.getsize(os.path.join(root_dir, img))
                total_size += size
            except:
                pass
        
        for dir_name in sorted(by_dir.keys()):
            files = by_dir[dir_name]
            print(f"\n  {dir_name}/ ({len(files)} files)")
            for f in files[:5]:
                print(f"    - {f}")
            if len(files) > 5:
                print(f"    ... and {len(files)-5} more")
        
        print(f"\nTotal space used by unreferenced images: {total_size:,} bytes ({total_size/1024/1024:.1f} MB)")
    
    # Save list for potential deletion
    with open('unreferenced_images.txt', 'w') as f:
        for img in sorted(unreferenced):
            f.write(f"{img}\n")
    
    print("\nSaved list of unreferenced images to unreferenced_images.txt")

if __name__ == "__main__":
    main()