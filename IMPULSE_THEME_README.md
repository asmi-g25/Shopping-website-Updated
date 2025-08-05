# Impulse E-commerce Theme

A sophisticated, minimalist e-commerce theme built on the bCommerce framework, inspired by Shopify's Impulse theme.

## 🎨 Design Improvements Made

### **Visual Enhancements**
- **Clean, minimalist design** with lots of white space
- **Sophisticated typography** using Inter font family
- **Modern color scheme** with black/white/gray palette
- **Professional product photography** styling
- **Smooth animations** and hover effects

### **Hero Section**
- **Full-width hero slider** with split-screen layout
- **Large, elegant typography** with thin font weights
- **Clean call-to-action buttons** with subtle hover effects
- **Professional image positioning** (60% image, 40% text)

### **Product Cards**
- **Minimalist product cards** without borders
- **Clean product information** layout
- **Subtle hover animations** with shadow effects
- **Professional badge styling** (New, Sale, Bestseller)
- **Centered product information** for better readability

### **Section Headers**
- **Refined typography** with proper spacing
- **Centered layout** for better visual hierarchy
- **Subtle color scheme** using grays instead of bright colors

### **Color Palette**
- **Primary**: Black (#000000)
- **Text Primary**: Dark Gray (#1a1a1a)
- **Text Secondary**: Medium Gray (#666666)
- **Background**: White (#ffffff) and Light Gray (#f8f9fa)

## 🚀 Features

### **Pages Available**
1. **Home Page** - Complete Impulse-style layout
2. **Product Page** - Detailed product view
3. **Checkout Page** - Multi-step checkout process
4. **Contact Page** - Contact form
5. **FAQ Page** - Frequently asked questions

### **Home Page Sections**
1. **Hero Banner Slider** - Full-width with professional styling
2. **Featured Categories** - Interactive category cards
3. **Featured Products** - Clean product grid
4. **Sales Items** - Special discounted products section

## 🛠️ Technical Implementation

### **Framework**
- Built on Angular with bCommerce template
- Follows bCommerce guidelines (HTML/CSS only modifications)
- Maintains all existing TypeScript functionality

### **Styling**
- SCSS with CSS custom properties
- Responsive design (mobile-first approach)
- Inter font family for modern typography
- Clean, minimal aesthetic

### **Theme System**
- New `THEME_IMPULSE` theme added
- Easy theme switching capability
- Maintains compatibility with existing themes

## 📱 Responsive Design

- **Mobile-first** approach
- **Tablet-optimized** layouts
- **Desktop-enhanced** experience
- **Touch-friendly** interface elements

## 🎯 Key Improvements Over Basic Version

1. **Professional Typography** - Inter font with proper weights and spacing
2. **Sophisticated Color Scheme** - Black/white/gray instead of bright colors
3. **Better Visual Hierarchy** - Proper spacing and layout structure
4. **Modern Product Cards** - Clean, minimal design without heavy borders
5. **Elegant Hero Section** - Split-screen layout with professional styling
6. **Subtle Animations** - Smooth hover effects and transitions
7. **Better Image Handling** - Professional product photography styling

## 🌐 How to Run

```bash
npm install
npm run start
```

Navigate to `http://localhost:4201/` to view the site.

## 📁 File Structure

```
src/
├── app/
│   ├── home/
│   │   ├── home.component.html (Updated with Impulse styling)
│   │   └── home.component.scss (New Impulse-style CSS)
│   ├── product/
│   │   └── ... (New product page)
│   ├── checkout/
│   │   └── ... (New checkout page)
│   └── ...
├── styles.scss (Updated with THEME_IMPULSE)
└── index.html (Updated theme class)
```

## 🎨 Customization

The theme uses CSS custom properties, making it easy to customize:

- Colors can be changed in the `THEME_IMPULSE` section of `styles.scss`
- Typography can be modified by updating the Inter font imports
- Layout spacing can be adjusted in component SCSS files
- All changes follow bCommerce guidelines (HTML/CSS only)

## 📸 Reference Images

The theme was designed based on the Impulse theme reference images you provided:
- `IMPULSE_MOBILE_FIRST.webp`
- `impulse_modern_3ca98702-33c1-4542-bb6a-dafdc670a41c_1080x.png.webp`
- `IMPULSE_PROMOTION.webp`
- `IMPULSE_STORYTELLING_3953b1ba-ea82-4ae1-87e6-f48a5817bca2.webp`

The design now matches the sophisticated, minimalist aesthetic of the original Impulse theme while maintaining all bCommerce functionality.