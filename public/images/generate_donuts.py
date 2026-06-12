from PIL import Image, ImageDraw, ImageFont

# 30 distinct colours (one for each donut)
colours = [
    '#FF6B6B','#4ECDC4','#FFD93D','#6C5CE7','#FF9FF3','#54A0FF','#5F27CD',
    '#F39C12','#E74C3C','#1ABC9C','#9B59B6','#2ECC71','#F1C40F','#E67E22',
    '#34495E','#16A085','#D35400','#C0392B','#27AE60','#8E44AD','#F62459',
    '#87D37C','#F9690E','#F9BF3B','#3A539B','#F2784B','#A2DED0','#947CB0',
    '#1F3A93','#F5AB99'
]

# Generate donut1.jpg … donut30.jpg
for i in range(1, 31):
    img = Image.new('RGB', (800, 600), color=colours[i-1])
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype('arial.ttf', 40)
    except:
        font = ImageFont.load_default()
    draw.text((200, 250), f'Donut {i}', fill='white', font=font)
    img.save(f'donut{i}.jpg', quality=80)

print("✅ Done! 30 donut images created.")
