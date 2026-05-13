# @portfolio-svg-icon-provider

A lightweight, high-performance SVG icon provider for React portfolios. This package converts SVG files into optimized React components using SVGR, providing a type-safe and customizable way to use icons in your projects.

## 🚀 Features

- **Optimized SVGs**: Powered by SVGR for clean, efficient React components.
- **TypeScript Support**: Fully typed components and props.
- **Customizable**: Control size and other SVG attributes easily.
- **Tree-Shakable**: Import only the icons you need.
- **Lightweight**: Zero runtime overhead beyond React.

## 📦 Installation

```bash
npm install portfolio-svg-icon-provider
# or
yarn add portfolio-svg-icon-provider
# or
pnpm add portfolio-svg-icon-provider
```

## 🛠 Usage

Icons are exported as individual components. You can import them directly from the package subpaths.

```tsx
import ReactIcon from 'portfolio-svg-icon-provider/React';
import TypeScriptIcon from 'portfolio-svg-icon-provider/TypeScript';

const MyComponent = () => (
  <div>
    <ReactIcon color="#61DAFB" />
    <TypeScriptIcon className="my-custom-class" />
  </div>
);
```

Dynamic loading of icons is also supported via the `DynamicIconLoad` component:

```tsx
import { DynamicIconLoad } from 'portfolio-svg-icon-provider';
const MyComponent = () => (
  <div>
    <DynamicIconLoad name="React" color="#61DAFB" />
    <DynamicIconLoad name="TypeScript" className="my-custom-class" />
  </div>
);
```

### Props

All icon components accept the standard SVG attributes plus a convenient `size` prop:


| Prop       | Type              | Default     | Description                                                  |
| ---------- | ----------------- | ----------- | ------------------------------------------------------------ |
| `size`     | `number | string` | `"1em"`     | Sets both `width` and `height` of the SVG.                   |
| `color`    | `string`          | `undefined` | Sets the `fill` or `stroke` color (if supported by the SVG). |
| `...props` | `SVGProps`        | `undefined` | Any other valid React SVG property.                          |


## 🎨 Available Icons

Here are some of the icons included in this package:

- `Css`
- `Cypress`
- `Git`
- `Github`
- `Globe`
- `Html5`
- `Javascript`
- `Linkedin`
- `Next`
- `Php`
- `Postgresql`
- `React`
- `Tailwindcss`
- `Typescript`
- `Vercel`
- `Vite`
- `Window`
- `Zod`
- `Zustand`

## 🛠 Development

### Adding New Icons

1. Drop your `.svg` files into the `src/svg` directory.
2. Run the generation script:
  ```bash
   npm run generate
  ```
3. Build the project:
  ```bash
   npm run build
  ```

The `generate` script automatically creates thin React wrappers for each SVG file in `src/components`, ensuring they all follow the same pattern and support the `useIcon` hook.

### Demo UI for testing

A local demo app is available under the `demo/` folder.

```bash
npm install
npm run demo
```

Then open `http://localhost:4173` to interact with the icon preview UI, adjust size/color, and see all supported icons.

### Code Quality & Standards

This project maintains high standards for code quality and consistency:

- **Strict Typing**: Forbidden `any` and `unknown` types to ensure maximum type safety.
- **Automated Checks**: **Husky** and **lint-staged** run ESLint and Prettier on every commit.
- **Modular Architecture**: Components follow a strict "one component per file" rule with logic extracted into custom hooks.

#### Available Scripts

- `npm run lint`: Run ESLint check.
- `npm run format`: Format code with Prettier.
- `npm run test`: Run unit tests with Vitest.
- `npm run generate`: Re-generate React components from SVG files.
- `npm run build`: Build the library for production.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Legal Disclaimer

The icons included in this package are logos of various brands and projects. These logos are trademarks of their respective owners. Their inclusion in this package is intended for identification purposes (e.g., in developer portfolios) and does not imply any endorsement or affiliation.

If you are a trademark owner and would like your logo removed from this package, please open an issue or contact the maintainer.

## 🤝 Credits & Resources

- **[svgl](https://svgl.app/)**

