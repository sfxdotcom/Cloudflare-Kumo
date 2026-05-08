# Enviseo theme

Kumo-compatible design tokens for the **Enviseo** brand. These mirror the
official Enviseo style guide (Clash Grotesk + Inter, navy / periwinkle / cyan
palette).

## Usage

Import the CSS for global custom-property tokens:

```css
@import "@kumo/themes/enviseo/tokens.css";
```

Or import the typed object in a TS/JS app:

```ts
import { enviseoTokens } from "@kumo/themes/enviseo/tokens"

const primary = enviseoTokens.color.primary // "#0c1b30"
```

## Tokens overview

### Palette

| Token       | HEX       |
| ----------- | --------- |
| Primary     | `#0C1B30` |
| Secondary   | `#588FFE` |
| Tertiary    | `#1E2F47` |
| Accent      | `#00B7F9` |
| Base        | `#010619` |
| Neutral     | `#161616` |
| Success     | `#29A745` |
| Danger      | `#DC3545` |
| Warning     | `#FFC10A` |
| Info        | `#2CB1E8` |

### Typography

- **Display:** Clash Grotesk
- **Body:**    Inter
- Type scale follows a **1.333** ratio (perfect fourth).

### Spacing (px)

`xs 13.3` → `s 20` → `m 30` → `l 45` → `xl 67.5` → `xxl 101.25`

### Radius

`xs 4` → `sm 8` → `md 12` → `lg 16` → `xl 24` → `2xl 32`

### Shadows

`m`, `l`, `xl` — navy-tinted, layered for soft elevation.
