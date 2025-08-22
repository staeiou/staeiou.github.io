#!/usr/bin/env python3
"""
Update all citations to have hyperlinked URLs
"""

import re
from pathlib import Path

def hyperlink_urls_in_citation(citation):
    """Convert plain URLs to hyperlinks in citation text"""
    # Pattern to match URLs that aren't already hyperlinked
    # Matches http:// or https:// followed by non-whitespace characters
    # But not if already inside an <a> tag or href attribute
    
    # First check if URL is already hyperlinked
    if '<a href=' in citation:
        return citation
    
    # Pattern to match URLs
    url_pattern = r'(https?://[^\s<>"]+)'
    
    def replace_url(match):
        url = match.group(1)
        # Remove trailing punctuation if present
        if url[-1] in '.,;:':
            return f'<a href="{url[:-1]}">{url[:-1]}</a>{url[-1]}'
        return f'<a href="{url}">{url}</a>'
    
    return re.sub(url_pattern, replace_url, citation)

def process_publications():
    """Process all publication files to hyperlink URLs in citations"""
    
    pub_dir = Path('/home/jupyter-staeiou/academicpages.github.io/_publications')
    updated_count = 0
    
    for pub_file in pub_dir.glob('*.md'):
        with open(pub_file, 'r') as f:
            content = f.read()
        
        # Check if file has a citation field
        if 'citation:' not in content:
            continue
        
        lines = content.split('\n')
        new_lines = []
        in_citation = False
        citation_updated = False
        
        for i, line in enumerate(lines):
            # Check if we're starting a citation field
            if line.startswith('citation:'):
                in_citation = True
                # Check if it has a URL
                if 'http://' in line or 'https://' in line:
                    # Check if not already hyperlinked
                    if '<a href=' not in line:
                        original_line = line
                        line = line[:9] + hyperlink_urls_in_citation(line[9:])  # Keep 'citation:' prefix
                        if line != original_line:
                            citation_updated = True
                            print(f"Updated {pub_file.name}")
            # Check if we're in a multi-line citation
            elif in_citation and line.startswith('  '):
                # This is a continuation of the citation
                if 'http://' in line or 'https://' in line:
                    if '<a href=' not in line:
                        original_line = line
                        line = '  ' + hyperlink_urls_in_citation(line[2:])  # Keep indentation
                        if line != original_line:
                            citation_updated = True
            else:
                in_citation = False
            
            new_lines.append(line)
        
        # Write back if changed
        if citation_updated:
            with open(pub_file, 'w') as f:
                f.write('\n'.join(new_lines))
            updated_count += 1
    
    print(f"\nTotal files updated: {updated_count}")

if __name__ == "__main__":
    process_publications()