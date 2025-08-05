# Angular E-commerce Template

A customizable Angular template for building e-commerce applications with pre-built components and theming support.

## Overview

This template provides a complete set of Angular components for e-commerce applications. Developers can customize the HTML and CSS to create their own unique designs while maintaining the underlying functionality.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone or download the template
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm run start
# or
ng serve
```

Navigate to `http://localhost:4201/` to view the application.

## Component Preview

You can preview individual components by accessing their routes:

- Header: `http://localhost:4201/header`
- Footer: `http://localhost:4201/footer`
- Cart: `http://localhost:4201/cart`
- Product List: `http://localhost:4201/products`
- [Add other component routes as needed]

## Customization Guidelines

### ✅ What You CAN Customize

#### HTML Templates

- Modify any `.html` file in the components
- Add new HTML elements and structure
- Change layout and component organization
- Add custom CSS classes

#### Styles

- Update component-specific `.scss` files
- Modify global styles in `src/styles.scss`
- Customize theme variables in `src/assets/styles/variables.scss`
- Add new color themes following existing patterns

#### Theme Customization

The template includes multiple pre-built themes:

- `THEME_FASHION` - Fashion/clothing stores
- `THEME_FURNITURE` - Furniture stores
- `THEME_ELECTRONIC` - Electronics stores
- `THEME_GARDEN` - Garden/outdoor stores
- `THEME_BEAUTY` - Beauty/cosmetics stores

To create a new theme, follow the pattern in `src/styles.scss`.

### ❌ What You SHOULD NOT Change

#### TypeScript Files

- **Do not modify** any `.ts` files
- Keep all existing event handlers and method calls
- Maintain all `@Input()` and `@Output()` properties
- Preserve component lifecycle methods

#### Webpack Configuration

- **Do not change** `webpack.config.js`
- This file contains critical build configurations

#### Events and Data Binding

When customizing HTML, ensure you:

- Keep all existing `(click)`, `(change)`, `(submit)` event handlers
- Maintain `[(ngModel)]` and `[property]` bindings
- Preserve `*ngFor`, `*ngIf`, and other structural directives

### Example: Safe HTML Customization

```html
<!-- ✅ GOOD: Adding custom styling while keeping events -->
<button class="my-custom-button btn-primary" (click)="addToCart(product)" [disabled]="isLoading">
  <i class="fas fa-shopping-cart"></i>
  Add to Cart
</button>

<!-- ❌ BAD: Removing or changing event handlers -->
<button class="my-custom-button">Add to Cart</button>
```

## Mock Data for Testing

Some components require data to display properly (like cart, product lists). You can add mock data directly in the component templates or create mock services.

### Example Mock Data Usage

```html
<!-- In product-list.component.html -->
<div *ngFor="let product of mockProducts" class="product-card">
  <img [src]="product.image" [alt]="product.name" />
  <h3>{{ product.name }}</h3>
  <p>{{ product.price | currency }}</p>
  <button (click)="addToCart(product)">Add to Cart</button>
</div>
```

## Theme Switching

To apply different themes, add the theme class to the `<body>` element:

```html
<body class="THEME_FASHION">
  <!-- or -->
  <body class="THEME_ELECTRONIC"></body>
</body>
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Component Structure

```
src/
├── app/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── product-list/
│   │   ├── cart/
│   │   └── ...
│   └── ...
├── assets/
│   └── styles/
│       └── variables.scss
└── styles.scss
```

## Preview Feature (Coming Soon)

We're working on a preview feature that will allow you to:

- See live previews of your customizations
- Test different themes in real-time
- Preview components with sample data

## Best Practices

1. **Test Frequently**: Use `npm run start` to preview changes
2. **Backup Original**: Keep a copy of original files before customizing
3. **Follow Existing Patterns**: Maintain the same HTML structure patterns
4. **Use Existing Classes**: Leverage existing CSS classes for consistency
5. **Validate Events**: Ensure all user interactions still work after customization

## Support

If you encounter issues:

1. Check that all event handlers are preserved
2. Verify TypeScript files haven't been modified
3. Ensure `webpack.config.js` remains unchanged
4. Test component routes individually

## File Structure Guidelines

- **Modify**: `.html`, `.scss`, `variables.scss`
- **Don't Touch**: `.ts`, `webpack.config.js`
- **Be Careful**: Maintain all Angular directives and event bindings

---

**Remember**: The goal is to customize the appearance and layout while preserving all functionality. When in doubt, keep the existing structure and only modify styling and content.
