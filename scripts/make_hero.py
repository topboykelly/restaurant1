from pathlib import Path

from PIL import Image

# Prefer the high-fidelity hero mockup food frame.
src = Path(
    r"C:\Users\HP\.cursor\projects\c-Users-HP-restaurant\assets"
    r"\c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"6bae672881b80c7767ab415efc3591e5_images_image-cc8fb0b1-ba2b-4bc3-a7ea-9d8c0ab5ba57.png"
)
img = Image.open(src).convert("RGB")
w, h = img.size
print("src", w, h)

# Crop food-heavy right/center; avoid baked-in UI text on the left.
left = int(w * 0.55)
top = int(h * 0.14)
right = int(w * 0.995)
bottom = int(h * 0.9)
crop = img.crop((left, top, right, bottom))

target_w, target_h = 1920, 1080
scale = max(target_w / crop.width, target_h / crop.height)
resized = crop.resize(
    (int(crop.width * scale), int(crop.height * scale)),
    Image.Resampling.LANCZOS,
)
left_c = (resized.width - target_w) // 2
top_c = max(0, (resized.height - target_h) // 3)
final = resized.crop((left_c, top_c, left_c + target_w, top_c + target_h))

out = Path(r"C:\Users\HP\restaurant\public\hero.jpg")
final.save(out, "JPEG", quality=90, optimize=True)
print("wrote", out, final.size, out.stat().st_size)
