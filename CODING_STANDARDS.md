# Coding Standards

Conventions for this project. When in doubt, match the surrounding code — consistency matters more than any individual rule.

## Components

### Use arrow functions (enforced)

Define components (and helper functions) as `const` arrow functions, not `function` declarations.

```tsx
// ✅ Do
export const Footer = () => {
  return <footer>…</footer>
}

// ❌ Don't
export function Footer() {
  return <footer>…</footer>
}
```

**Why:** Both compile to the same thing and perform identically, so this is a consistency choice. Arrow functions match how handlers and helpers are already written, can't be reassigned, and can't be used before they're defined.

**Things to know:**

- Arrow functions aren't hoisted. Define helper components (e.g. `SkeletonLine`) *above* the component that uses them.
- Generic components in `.tsx` need a trailing comma so the generic isn't parsed as JSX: `const List = <T,>(props: ListProps<T>) => { … }`.
- The root `App` component is the only default export: `const App = () => { … }` followed by `export default App`.

### Exports

- Use **named exports** for components (enforced) (`export const Hero = …`). The only exception is `App`.
- Keep small, single-use helper components unexported in the same file as the component that uses them (e.g. `CopyEmailButton` in `Contact.tsx`).

### Props

- Type props with a `type` alias named `<Component>Props`, declared above the component.
- Destructure props in the parameter list.
- Don't use `React.FC`. Type the props directly instead.

```tsx
type SectionHeadingProps = {
  index: string
  title: string
}

export const SectionHeading = ({ index, title }: SectionHeadingProps) => { … }
```

## File structure

```
src/
  App.tsx            # Page layout and section order
  index.css          # Tailwind import, theme tokens, base styles
  components/        # One component per file, PascalCase filename
  data/site.ts       # Content: name, email, social links, skills
```

- Component files use **PascalCase** and match the component name (`Hero.tsx` → `Hero`).
- Content like copy, links and contact details goes in `src/data/site.ts`, not hard-coded in components.

## TypeScript

- Use `type`, not `interface` (enforced).
- Use `import type` for type-only imports (enforced).
- Use `as const` on static data objects so values are typed as literals.
- No `any` (enforced). If a type is genuinely unknown, use `unknown` and narrow it.

## Styling

- Style with **Tailwind utility classes** only, with no separate CSS files per component.
- Theme values (fonts, animations, colours) live in the `@theme` block in `src/index.css`.
- The design is **monochrome with one accent colour**:
  - Use `neutral-*` greys, `white` and `black` for most of the UI.
  - Use `accent` (`text-accent`, `bg-accent/10`, etc.) **sparingly**, for highlights, labels and hover states only.
  - Never hard-code a colour. Change `--color-accent` in `index.css` to re-theme.
- Write mobile-first: base classes for small screens, with `sm:` / `md:` for larger ones.

## Accessibility

Target **WCAG 2.2 AA**.

### Structure

- Use semantic elements (`header`, `nav`, `main`, `section`, `footer`, `ul`/`li`) over generic `div`s, and keep heading levels in order.
- The "Skip to content" link in `App.tsx` must stay the first focusable element on the page.
- `lang` on `<html>` is `en-GB`.

### Colour contrast

- Body and small text must reach **4.5:1**, large text (24px+, or 18.5px+ bold) **3:1**.
- On this site's dark background, the lightest grey that passes for small text is `neutral-400`. **Don't use `neutral-500` or darker for text.** `neutral-500` is fine for large text only.
- `accent` passes for text of any size.
- Decorative elements hidden with `aria-hidden` (e.g. arrow icons) are exempt.

### Names and labels

- Decorative SVGs and visuals get `aria-hidden="true"`. Icon-only links need an accessible label.
- An accessible name must **start with the visible text** (WCAG 2.5.3). Add extra context with `sr-only` text after the visible text, not with an `aria-label` that replaces it.
- External links use `target="_blank"` and `rel="noreferrer"`, plus `<span className="sr-only"> (opens in new tab)</span>`.
- Announce dynamic status changes (e.g. "copied") through a separate `role="status"` element, not by changing a button's own label.

### Focus

- Focus styles are global (`:focus-visible` in `index.css`, 2px accent outline). Don't remove outlines with `outline-none` on interactive elements.
- `scroll-padding-top` on `html` keeps focused elements and anchor targets clear of the fixed nav. If the nav height changes, update it. Don't add `scroll-mt-*` to sections, or the offsets will double up.

### Motion

- All animations must respect `prefers-reduced-motion` (handled globally in `index.css`).
- **No infinite or looping animations.** Anything that moves for more than 5 seconds needs a pause control (WCAG 2.2.2), so keep motion to short, one-off transitions.

## Tooling: Biome

Formatting and linting are handled by [Biome](https://biomejs.dev), configured in `biome.json`. Rules marked **(enforced)** in this file are checked automatically. Everything else is by convention.

| Command | What it does |
|---|---|
| `bun run check` | Format, lint and organise imports, applying safe fixes |
| `bun run format` | Format only |
| `bun run lint` | Lint only |

It runs at three points:

1. **On save in VS Code.** Install the recommended Biome extension (`.vscode/extensions.json`); the workspace settings format and fix on save.
2. **On commit.** A [Lefthook](https://lefthook.dev) pre-commit hook runs `biome check --write` on staged files and re-stages fixes. It's installed automatically by `bun install`.
3. **On build.** `bun run build` runs `biome ci` first, so code with lint errors or bad formatting **fails the Cloudflare build and never reaches production**.

### Formatting (enforced)

- 2-space indentation, 120-character line width.
- Single quotes in TS, double quotes in JSX attributes.
- No semicolons (except where required), trailing commas everywhere.
- Imports are sorted automatically.
- Tailwind classes are sorted automatically (Biome `useSortedClasses`).

### Suppressing a rule

If a rule genuinely doesn't apply, suppress it on the line with a reason. Never disable it globally:

```css
/* biome-ignore lint/complexity/noImportantStyles: reduced-motion must override every component animation */
```
