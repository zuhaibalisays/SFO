# Images Directory

## Required Images

### Camel.jpg
- **Purpose:** Hero background and decorative element on the Home page
- **Dimensions:** 1200x600px recommended (landscape orientation)
- **Format:** JPEG (for photographic content)
- **Description:** A camel in the Balochistan desert landscape, evoking the cultural heritage of the region
- **Usage:** 
  - Hero section background (subtle, with overlay)
  - Mission card decoration (circular crop, subtle opacity)
- **Status:** ⚠️ **MISSING** — needs to be added before deployment

### Where to Get the Image
The camel image should be sourced from the organization's GitHub repository "NGO" or generated using AI image generation tools. The image should depict:
- A dromedary (single-humped) camel
- Desert landscape (sand dunes)
- Warm, earthy tones (browns, oranges, golds)
- Golden hour lighting (sunset/sunrise)
- Cultural authenticity representing Balochistan

### Image Optimization
Before deploying:
1. Convert to WebP format for better compression (keep JPEG as fallback)
2. Optimize for web (quality 80-85%)
3. Target file size: < 100KB
4. Add proper `alt` text for accessibility (already implemented in code)

### Alternative: Generated Image
If the original image is not available, a suitable replacement can be generated using AI image generation with this prompt:

```
A majestic single-humped dromedary camel walking across golden sand dunes 
in the Balochistan desert at golden hour. The camel is silhouette-style 
against a warm sunset sky with orange and brown tones. The scene evokes 
the cultural heritage of Balochistan, Pakistan. Warm earthy color palette 
with browns, oranges, and cream tones. Professional photography style, 
high quality, suitable for a non-profit organization website.
```

---

## Favicon Files

### Required Files
The following favicon files need to be created from `favicon.svg`:

- `favicon-16x16.png` — 16×16 pixels
- `favicon-32x32.png` — 32×32 pixels
- `apple-touch-icon.png` — 180×180 pixels
- `favicon.ico` — Multi-size ICO file (16×16, 32×32, 48×48)

### How to Generate
Use an online favicon generator (e.g., realfavicongenerator.net) or convert from `favicon.svg`:

```bash
# Using ImageMagick
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

### Status
- ✅ `favicon.svg` — Created (SVG format, scalable)
- ⚠️ `favicon-16x16.png` — **MISSING**
- ⚠️ `favicon-32x32.png` — **MISSING**
- ⚠️ `apple-touch-icon.png` — **MISSING**
- ⚠️ `favicon.ico` — **MISSING**

---

## OG Image

### og-image.png
- **Purpose:** Social media sharing preview (Facebook, Twitter, LinkedIn)
- **Dimensions:** 1200×630 pixels (recommended)
- **Format:** PNG or JPEG
- **Content:** Organization logo + tagline on branded background
- **Status:** ⚠️ **MISSING** — needs to be created

### Design Guidelines
- Use primary brown (#7A4A1E) or cream (#FBF6EE) background
- Include "SFA" logo prominently
- Add tagline: "Empowering Communities Through Education in Balochistan"
- Ensure text is readable at small sizes
- Keep file size under 300KB
