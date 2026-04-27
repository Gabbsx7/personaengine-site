import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. sectionBase padding
content = content.replace('padding: "100px 24px",', '')

# 2. Add responsive padding to all sections
content = content.replace('<section style=', '<section className="py-16 lg:py-24 px-4 sm:px-6" style=')
content = content.replace('<section id=', '<section className="py-16 lg:py-24 px-4 sm:px-6" id=')

# 3. Hero Grid
content = content.replace('''          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >''', '''          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">''')

# 4. Trust signals
content = content.replace('''              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  marginTop: "48px",
                  paddingTop: "32px",
                  borderTop: `1px solid ${border}`,
                }}
              >''', '''              <div
                className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8"
                style={{ borderTop: `1px solid ${border}` }}
              >''')

# 5. Steps Accordion
old_step_grid = '''                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "24px",
                  alignItems: "center",'''
new_step_grid = '''                  display: "grid",
                  alignItems: "center",
                }}
                className="grid-cols-[60px_1fr_20px] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-6"'''
content = content.replace(old_step_grid, new_step_grid)

# 6. Behavioral layer
old_behav_grid = '''              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "center",'''
new_behav_grid = '''              display: "grid",
              gap: "32px",
              alignItems: "center",
            }}
            className="grid-cols-1 md:grid-cols-2"'''
content = content.replace(old_behav_grid, new_behav_grid)

# 7. Behavioral Tags
old_behav_tags = '''              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}'''
new_behav_tags = '''              style={{
                display: "grid",
                gap: "8px",
              }}
              className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2"'''
content = content.replace(old_behav_tags, new_behav_tags)

# 8. Metrics Grid 1
old_metrics_1 = '''          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2px",
            }}
          >'''
new_metrics_1 = '''          <div
            style={{
              display: "grid",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2px",
            }}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >'''
content = content.replace(old_metrics_1, new_metrics_1)

# 9. Metrics Grid 2
old_metrics_2 = '''          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >'''
new_metrics_2 = '''          <div
            style={{
              display: "grid",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
            }}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >'''
content = content.replace(old_metrics_2, new_metrics_2)

# 10. Timeline implementation
old_timeline = '''                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "flex-start",
                    padding: "24px 0",
                  }}'''
new_timeline = '''                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "24px 0",
                  }}
                  className="gap-4 md:gap-8 flex-row"'''
content = content.replace(old_timeline, new_timeline)

# 11. Adjust CTA padding and layout
old_cta = '''            <div
              style={{
                background: surface,
                border: `1px solid ${border}`,
                borderRadius: "20px",
                padding: "80px 60px",
                position: "relative",
                overflow: "hidden",
              }}
            >'''
new_cta = '''            <div
              style={{
                background: surface,
                border: `1px solid ${border}`,
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
              }}
              className="py-12 px-6 sm:py-16 sm:px-12 md:py-20 md:px-16"
            >'''
content = content.replace(old_cta, new_cta)

# Fix h1 text size in Hero
content = content.replace('fontSize: "clamp(40px, 5vw, 64px)",', 'fontSize: "clamp(32px, 6vw, 64px)",')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Responsive tweaks applied.")
