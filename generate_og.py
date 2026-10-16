import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

WIDTH, HEIGHT = 1200, 630

def create_og_c2(output_jpg, output_png):
    # 1. Base C2 Tactical Station background
    bg = Image.open(r'src\imports\fusion-c2\hero.png').convert('RGBA')
    bg_resized = bg.resize((1200, int(1200 * bg.height / bg.width)), Image.Resampling.LANCZOS)
    if bg_resized.height < HEIGHT:
        bg_resized = bg.resize((int(HEIGHT * bg.width / bg.height), HEIGHT), Image.Resampling.LANCZOS)
    
    left = bg_resized.width - 1200
    top = (bg_resized.height - HEIGHT) // 2
    canvas = bg_resized.crop((left, top, left + 1200, top + HEIGHT))

    # 2. Gradient overlay on the left to ensure high readability
    gradient = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_grad = ImageDraw.Draw(gradient)
    
    for x in range(WIDTH):
        if x < 420:
            alpha = 245
        elif x < 920:
            t = (x - 420) / (920 - 420)
            alpha = int(245 * (1 - (t * t * (3 - 2 * t))))
        else:
            alpha = 0
        draw_grad.line([(x, 0), (x, HEIGHT)], fill=(6, 10, 8, alpha))
    
    # Top and bottom vignettes
    for y in range(80):
        alpha = int(140 * (1 - (y / 80)))
        draw_grad.line([(0, y), (WIDTH, y)], fill=(4, 7, 5, alpha))
    for y in range(HEIGHT - 80, HEIGHT):
        alpha = int(160 * ((y - (HEIGHT - 80)) / 80))
        draw_grad.line([(0, y), (WIDTH, y)], fill=(4, 7, 5, alpha))

    canvas = Image.alpha_composite(canvas, gradient)

    # 3. Add Sahana Defence Shield (Asset 1 3.png) with soft ambient backlight
    shield = Image.open(r'C:\Users\Shaym Bhadja\Downloads\Logo\Asset 1 3.png').convert('RGBA')
    shield_h = 108
    shield_w = int(shield.width * (shield_h / shield.height))
    shield_resized = shield.resize((shield_w, shield_h), Image.Resampling.LANCZOS)
    
    # Subtle backlight behind shield for pop
    glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_glow = ImageDraw.Draw(glow)
    shield_center_x = 75 + shield_w // 2
    shield_center_y = 65 + shield_h // 2
    draw_glow.ellipse(
        [(shield_center_x - 65, shield_center_y - 65), (shield_center_x + 65, shield_center_y + 65)],
        fill=(194, 155, 79, 45)
    )
    glow = glow.filter(ImageFilter.GaussianBlur(30))
    canvas = Image.alpha_composite(canvas, glow)
    
    # Paste shield
    canvas.paste(shield_resized, (75, 65), shield_resized)

    # 4. Draw Typography
    draw = ImageDraw.Draw(canvas)
    
    font_bold_huge = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 44)
    font_bold_logo = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 44)
    font_semi_mid = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 20)
    font_sub_pill = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 13)
    font_regular = ImageFont.truetype(r'C:\Windows\Fonts\segoeui.ttf', 17)

    # Logo text next to shield with dynamic text measurement
    logo_x = 75 + shield_w + 24
    logo_y = 68
    
    sahana_bbox = font_bold_logo.getbbox("SAHANA")
    sahana_w = sahana_bbox[2] - sahana_bbox[0]
    
    draw.text((logo_x, logo_y), "SAHANA", font=font_bold_logo, fill=(212, 175, 95))
    draw.text((logo_x + sahana_w + 14, logo_y), "DEFENCE", font=font_bold_logo, fill=(255, 255, 255))
    
    # Pill / Subtitle below brand name
    draw.text((logo_x, logo_y + 54), "SOVEREIGN DEFENCE TECHNOLOGIES", font=font_sub_pill, fill=(155, 185, 160))

    # Sleek gold/green hairline divider
    draw.line([(75, 202), (590, 202)], fill=(194, 155, 79, 160), width=2)
    draw.rectangle([(75, 200), (120, 204)], fill=(132, 204, 22, 255))

    # Main Headline
    head_y = 232
    draw.text((75, head_y), "ADVANCED DEFENCE &", font=font_bold_huge, fill=(255, 255, 255))
    draw.text((75, head_y + 54), "AEROSPACE SOLUTIONS", font=font_bold_huge, fill=(212, 175, 95))

    # Descriptive pillars
    desc_y = 372
    draw.text((75, desc_y), "Electronic Warfare  •  Information Warfare  •  Defence DeepTech", font=font_semi_mid, fill=(230, 235, 230))

    # Secondary micro description
    micro_desc = "Counter-UAS Solutions, Multi-Mission C2 & Tactical Radar Systems"
    draw.text((75, desc_y + 36), micro_desc, font=font_regular, fill=(160, 180, 170))

    # Bottom Tactical HUD Bar / Metadata
    hud_y = 525
    draw.rectangle([(75, hud_y), (370, hud_y + 40)], outline=(194, 155, 79, 140), width=1)
    # Green live beacon dot
    draw.ellipse([(95, hud_y + 16), (103, hud_y + 24)], fill=(132, 204, 22))
    draw.text((115, hud_y + 11), "WWW.SAHANADEFENCE.COM", font=ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 14), fill=(255, 255, 255))

    # Corner HUD crosshair brackets on the canvas
    hud_color = (132, 204, 22, 180)
    # Top-right bracket
    draw.line([(1155, 30), (1175, 30)], fill=hud_color, width=2)
    draw.line([(1175, 30), (1175, 50)], fill=hud_color, width=2)
    # Bottom-right bracket
    draw.line([(1155, 600), (1175, 600)], fill=hud_color, width=2)
    draw.line([(1175, 580), (1175, 600)], fill=hud_color, width=2)
    # Top-left bracket
    draw.line([(30, 30), (50, 30)], fill=hud_color, width=2)
    draw.line([(30, 30), (30, 50)], fill=hud_color, width=2)
    # Bottom-left bracket
    draw.line([(30, 600), (50, 600)], fill=hud_color, width=2)
    draw.line([(30, 580), (30, 600)], fill=hud_color, width=2)

    # Frame outer thin border
    draw.rectangle([(0, 0), (WIDTH - 1, HEIGHT - 1)], outline=(35, 50, 40, 255), width=1)

    # Save outputs
    rgb_canvas = canvas.convert('RGB')
    rgb_canvas.save(output_jpg, 'JPEG', quality=95)
    canvas.save(output_png, 'PNG')
    print(f'Successfully updated {output_jpg} and {output_png}')

if __name__ == '__main__':
    create_og_c2(r'public\og-image.jpg', r'public\og-image.png')
