import os

with open('src/app/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('--primary: #fbbf24;', '--primary: #a855f7;')
content = content.replace('--primary-dark: #f59e0b;', '--primary-dark: #8b5cf6;')
content = content.replace('rgba(251, 191, 36,', 'rgba(168, 85, 247,')

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("globals.css updated.")
