import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

WIDTH, HEIGHT = 1200, 630

def create_all_og():
    # 1. Base C2 background
    bg = Image.open(r'src\imports\fusion-c2\hero.png').convert('RGBA')
    bg_resized = bg.resize((1200, int(1200 * bg.height / bg.width)), Image.Resampling.LANCZOS)
    if bg_resized.height < HEIGHT:
        bg_resized = bg.resize((int(HEIGHT * bg.width / bg.height), HEIGHT), Image.Resampling.LANCZOS)
    
    # Position so C2 workstation is visible on right half
    left = bg_resized.width - 1200
    top = (bg_resized.height - HEIGHT) // 2
    canvas = bg_resized.crop((left, top, left + 1200, top + HEIGHT))

    # 2. Dark ambient overlay with center-weighted contrast
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    
    # Left-to-right gradient: dark on left, semi-dark in center, revealing right screen
    for x in range(WIDTH):
        if x < 400:
            alpha = 240
        elif x < 750:
            t = (x - 400) / (750 - 400)
            alpha = int(240 - t * 140)  # 240 down to 100
        elif x < 1000:
            t = (x - 750) / (1000 - 750)
            alpha = int(100 - t * 80)   # 100 down to 20
        else:
            alpha = 20
        draw_ov.line([(x, 0), (x, HEIGHT)], fill=(6, 10, 8, alpha))
        
    # Top and bottom vignettes
    for y in range(90):
        alpha = int(160 * (1 - (y / 90)))
        draw_ov.line([(0, y), (WIDTH, y)], fill=(4, 7, 5, alpha))
    for y in range(HEIGHT - 90, HEIGHT):
        alpha = int(170 * ((y - (HEIGHT - 90)) / 90))
        draw_ov.line([(0, y), (WIDTH, y)], fill=(4, 7, 5, alpha))

    canvas = Image.alpha_composite(canvas, overlay)

    # 3. Load Shield Logo (Asset 1 3.png)
    shield = Image.open(r'C:\Users\Shaym Bhadja\Downloads\Logo\Asset 1 3.png').convert('RGBA')
    
    # Place shield at x=65, y=55 (height 120px)
    shield_h = 120
    shield_w = int(shield.width * (shield_h / shield.height))
    shield_resized = shield.resize((shield_w, shield_h), Image.Resampling.LANCZOS)
    
    # Subtle warm ambient glow behind shield
    glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_glow = ImageDraw.Draw(glow)
    sc_x = 65 + shield_w // 2
    sc_y = 55 + shield_h // 2
    draw_glow.ellipse([(sc_x - 70, sc_y - 70), (sc_x + 70, sc_y + 70)], fill=(194, 155, 79, 60))
    glow = glow.filter(ImageFilter.GaussianBlur(30))
    canvas = Image.alpha_composite(canvas, glow)
    
    canvas.paste(shield_resized, (65, 55), shield_resized)

    # 4. Typography
    draw = ImageDraw.Draw(canvas)
    
    font_logo = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 48)
    font_head = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 44)
    font_sub_pill = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 14)
    font_pillars = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 20)
    font_desc = ImageFont.truetype(r'C:\Windows\Fonts\segoeui.ttf', 17)
    font_badge = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 14)

    # Logo Text
    logo_x = 65 + shield_w + 24
    logo_y = 60
    
    sahana_bbox = font_logo.getbbox("SAHANA")
    sahana_w = sahana_bbox[2] - sahana_bbox[0]
    
    draw.text((logo_x, logo_y), "SAHANA", font=font_logo, fill=(212, 175, 95))
    draw.text((logo_x + sahana_w + 14, logo_y), "DEFENCE", font=font_logo, fill=(255, 255, 255))
    draw.text((logo_x, logo_y + 56), "SOVEREIGN DEFENCE TECHNOLOGIES", font=font_sub_pill, fill=(155, 185, 160))

    # Divider
    draw.line([(65, 205), (620, 205)], fill=(194, 155, 79, 180), width=2)
    draw.rectangle([(65, 203), (115, 207)], fill=(132, 204, 22, 255))

    # Main Headline
    draw.text((65, 235), "ADVANCED DEFENCE &", font=font_head, fill=(255, 255, 255))
    draw.text((65, 289), "AEROSPACE SOLUTIONS", font=font_head, fill=(212, 175, 95))

    # Pillars
    draw.text((65, 375), "Electronic Warfare  •  Information Warfare  •  Defence DeepTech", font=font_pillars, fill=(230, 235, 230))
    draw.text((65, 412), "Counter-UAS Systems  |  Multi-Mission C2  |  Tactical Radars", font=font_desc, fill=(160, 180, 170))

    # Badge / URL Box
    hud_y = 525
    draw.rectangle([(65, hud_y), (360, hud_y + 40)], outline=(194, 155, 79, 160), width=1)
    draw.ellipse([(85, hud_y + 16), (93, hud_y + 24)], fill=(132, 204, 22))
    draw.text((105, hud_y + 11), "WWW.SAHANADEFENCE.COM", font=font_badge, fill=(255, 255, 255))

    # Corner HUD crosshairs
    hud_c = (132, 204, 22, 180)
    draw.line([(1155, 30), (1175, 30)], fill=hud_c, width=2)
    draw.line([(1175, 30), (1175, 50)], fill=hud_c, width=2)
    draw.line([(1155, 600), (1175, 600)], fill=hud_c, width=2)
    draw.line([(1175, 580), (1175, 600)], fill=hud_c, width=2)
    draw.line([(30, 30), (50, 30)], fill=hud_c, width=2)
    draw.line([(30, 30), (30, 50)], fill=hud_c, width=2)
    draw.line([(30, 600), (50, 600)], fill=hud_c, width=2)
    draw.line([(30, 580), (30, 600)], fill=hud_c, width=2)

    # Outer border
    draw.rectangle([(0, 0), (WIDTH - 1, HEIGHT - 1)], outline=(35, 50, 40, 255), width=1)

    # Save 1200x630 (Quality 88 = ~120KB, perfect for WhatsApp < 300KB)
    rgb_canvas = canvas.convert('RGB')
    rgb_canvas.save(r'public\og-image.jpg', 'JPEG', quality=88, optimize=True)
    canvas.save(r'public\og-image.png', 'PNG')
    print('Created public\\og-image.jpg and og-image.png')

    # -------------------------------------------------------------
    # 5. Create 1:1 Square OG Image (og-square.jpg, 600x600)
    # Specially tailored for compact WhatsApp / Teams / Skype link previews
    # -------------------------------------------------------------
    SQ_SIZE = 600
    sq_canvas = Image.new('RGB', (SQ_SIZE, SQ_SIZE), (8, 12, 10))
    
    # Place tactical backdrop subtly
    sq_bg = bg.resize((int(SQ_SIZE * 1.5), SQ_SIZE), Image.Resampling.LANCZOS)
    sq_bg_crop = sq_bg.crop((sq_bg.width - SQ_SIZE, 0, sq_bg.width, SQ_SIZE))
    # Darken it
    sq_dark = Image.new('RGBA', (SQ_SIZE, SQ_SIZE), (6, 10, 8, 215))
    sq_canvas.paste(sq_bg_crop.convert('RGB'), (0, 0))
    sq_canvas = Image.alpha_composite(sq_canvas.convert('RGBA'), sq_dark)

    # Large prominent shield logo in center-upper
    sq_shield_h = 220
    sq_shield_w = int(shield.width * (sq_shield_h / shield.height))
    sq_shield_res = shield.resize((sq_shield_w, sq_shield_h), Image.Resampling.LANCZOS)
    
    # Ambient glow
    sq_glow = Image.new('RGBA', (SQ_SIZE, SQ_SIZE), (0, 0, 0, 0))
    sq_dg = ImageDraw.Draw(sq_glow)
    sq_center_x = SQ_SIZE // 2
    sq_center_y = 175
    sq_dg.ellipse([(sq_center_x - 120, sq_center_y - 120), (sq_center_x + 120, sq_center_y + 120)], fill=(194, 155, 79, 80))
    sq_glow = sq_glow.filter(ImageFilter.GaussianBlur(40))
    sq_canvas = Image.alpha_composite(sq_canvas, sq_glow)

    sq_canvas.paste(sq_shield_res, (sq_center_x - sq_shield_w // 2, 65), sq_shield_res)

    sq_draw = ImageDraw.Draw(sq_canvas)
    sq_font_logo = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 38)
    sq_font_sub = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 16)
    sq_font_tag = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 13)

    # Centered Logo Text
    full_logo_text_w = font_logo.getbbox("SAHANA")[2] + 10 + font_logo.getbbox("DEFENCE")[2]
    # Center calculation
    s_bbox = sq_font_logo.getbbox("SAHANA")
    s_w = s_bbox[2] - s_bbox[0]
    d_bbox = sq_font_logo.getbbox("DEFENCE")
    d_w = d_bbox[2] - d_bbox[0]
    total_w = s_w + 12 + d_w
    start_x = (SQ_SIZE - total_w) // 2

    sq_draw.text((start_x, 315), "SAHANA", font=sq_font_logo, fill=(212, 175, 95))
    sq_draw.text((start_x + s_w + 12, 315), "DEFENCE", font=sq_font_logo, fill=(255, 255, 255))

    # Divider line
    sq_draw.line([(120, 385), (480, 385)], fill=(194, 155, 79, 180), width=2)
    sq_draw.rectangle([(SQ_SIZE // 2 - 25, 383), (SQ_SIZE // 2 + 25, 387)], fill=(132, 204, 22, 255))

    # Subtitle
    sub_title = "ADVANCED DEFENCE & AEROSPACE"
    sub_bbox = sq_font_sub.getbbox(sub_title)
    sub_w = sub_bbox[2] - sub_bbox[0]
    sq_draw.text(((SQ_SIZE - sub_w) // 2, 408), sub_title, font=sq_font_sub, fill=(255, 255, 255))

    # Pillars
    tag_line = "ELECTRONIC WARFARE  •  C2  •  DEEPTECH"
    tag_bbox = sq_font_tag.getbbox(tag_line)
    tag_w = tag_bbox[2] - tag_bbox[0]
    sq_draw.text(((SQ_SIZE - tag_w) // 2, 442), tag_line, font=sq_font_tag, fill=(155, 185, 160))

    # Website badge at bottom
    badge_w = 260
    b_x = (SQ_SIZE - badge_w) // 2
    sq_draw.rectangle([(b_x, 505), (b_x + badge_w, 545)], outline=(194, 155, 79, 140), width=1)
    sq_draw.ellipse([(b_x + 16, 521), (b_x + 24, 529)], fill=(132, 204, 22))
    sq_draw.text((b_x + 34, 516), "SAHANADEFENCE.COM", font=ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 13), fill=(255, 255, 255))

    # Corner brackets
    sq_hud = (132, 204, 22, 160)
    sq_draw.line([(570, 20), (585, 20)], fill=sq_hud, width=2)
    sq_draw.line([(585, 20), (585, 35)], fill=sq_hud, width=2)
    sq_draw.line([(570, 580), (585, 580)], fill=sq_hud, width=2)
    sq_draw.line([(585, 565), (585, 580)], fill=sq_hud, width=2)
    sq_draw.line([(15, 20), (30, 20)], fill=sq_hud, width=2)
    sq_draw.line([(15, 20), (15, 35)], fill=sq_hud, width=2)
    sq_draw.line([(15, 580), (30, 580)], fill=sq_hud, width=2)
    sq_draw.line([(15, 565), (15, 580)], fill=sq_hud, width=2)

    sq_draw.rectangle([(0, 0), (SQ_SIZE - 1, SQ_SIZE - 1)], outline=(35, 50, 40, 255), width=1)

    sq_rgb = sq_canvas.convert('RGB')
    sq_rgb.save(r'public\og-square.jpg', 'JPEG', quality=88, optimize=True)
    sq_canvas.save(r'public\og-square.png', 'PNG')
    print('Created public\\og-square.jpg and og-square.png')

if __name__ == '__main__':
    create_all_og()
