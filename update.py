import os

def replace_in_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Update layout.tsx
replace_in_file('src/app/layout.tsx', [
    ('Persona Engine', 'Reveniee')
])

# Update page.tsx
replace_in_file('src/app/page.tsx', [
    ('Persona Engine', 'Reveniee'),
    ('persona_engine', 'reveniee'),
    ('const gold = "#F5A623";', 'const gold = "#8b5cf6";')
])

# Update Footer.tsx
footer_content = """export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-zinc-500">
      <p>© {new Date().getFullYear()} Outbound Machine powered by Reveniee — Uma empresa Ant&apos;z Studio.</p>
      <p className="mt-2">Contato: gabriel@reveniee.com.br</p>
    </footer>
  );
}
"""
with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_content)

# Update TopNav.tsx
replace_in_file('src/components/TopNav.tsx', [
    ('Persona <span className="text-yellow-400">Engine</span>', 'Reveniee'),
    ('bg-yellow-400', 'bg-purple-500'),
    ('text-yellow-400', 'text-purple-500'),
    ('/personaengine-logo.svg', '/R.png'),
    ('Persona Engine logo', 'Reveniee logo'),
    ('className="h-18 w-18 -mt-2" style={{ height: 72, width: 72 }}', 'className="h-12 w-12" style={{ height: 48, width: 48 }}')
])

print("Updates completed successfully.")
