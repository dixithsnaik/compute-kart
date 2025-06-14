# 🚀 ComputeKart – Nx Monorepo

This is a monorepo powered by [Nx](https://nx.dev), built for scalable and maintainable frontend development.

## 📁 Project Structure

- **apps/cloud-share** – Main React application.
- **libs/ui-kit** – Shared UI component library using Tailwind CSS and integrated with Storybook.
- **libs/ui-kit/tailwind.preset.js** – Centralized Tailwind config shared across the workspace.

---

## 📦 Setup

```sh
# Install dependencies
npm install

# Serve the main application
npx nx serve cloud-share
```

---

## 🧩 UI Library – `ui-kit`

### ✅ Add a new shared component

```sh
# Example: Add a new Button component inside ui-kit
libs/ui-kit/src/lib/components/Button.tsx
```

> Make sure to write clean, reusable components and follow consistent naming conventions.

### ✅ Tailwind Usage

Tailwind is configured inside `libs/ui-kit/tailwind.preset.js` and extended via `tailwind.config.js` in the root/app.

To use shared styles:

```tsx
<div className="text-primary bg-accent p-4 rounded-lg">Shared UI Component</div>
```

---

## 📚 Storybook for UI Development

Storybook is set up for `ui-kit` to build and test components in isolation.


```sh
# Start Storybook locally
npx nx run ui-kit:storybook

# Build static Storybook site
npx nx run ui-kit:build-storybook

# Output: dist/storybook/ui-kit/index.html
```

---

## ⚙️ Useful Nx Commands

```sh
# Run the main app
npx nx serve cloud-share

# Build the main app
npx nx build cloud-share

# Run Storybook
npx nx run ui-kit:storybook

# Build Storybook
npx nx run ui-kit:build-storybook

# Lint any project
npx nx lint cloud-share
npx nx lint ui-kit

# Run unit tests
npx nx test ui-kit

# Visualize the dependency graph
npx nx graph
```

---

## 🛠️ Project Rules

- ✅ **All reusable UI must go inside `ui-kit`**
- ✅ **Use Tailwind utility classes for styling**
- ✅ **Write a Storybook story for every new component**
- ✅ **Ensure all changes are tested and linted**
- ✅ **Use `nx graph` to understand project relationships**
- ❌ **Never write shared components directly inside apps**

---

## 📘 References

- [Nx Docs](https://nx.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Storybook](https://storybook.js.org)

---

> Made with 💻 using Nx + React + Tailwind + Storybook
