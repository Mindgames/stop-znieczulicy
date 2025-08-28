# Repository Guidelines

## Project Structure & Module Organization
- `src/`: React + TypeScript source. Key areas: `components/` (UI, PascalCase files), `pages/` (route views), `utils/` (helpers), `index.css` (Tailwind entry), `main.tsx` (bootstrap), `App.tsx` (routing).
- `public/`: Static assets served as-is (favicons, images). Reference with `/filename.ext`.
- `assets/`: Project images bundled via Vite imports.
- `supabase/migrations/`: SQL migrations for data tables and RLS policies.
- `dist/`: Build output (generated).

## Build, Test, and Development Commands
- `pnpm install` (or `npm install`): Install dependencies.
- `pnpm dev` (or `npm run dev`): Start Vite dev server with HMR.
- `pnpm build` (or `npm run build`): Production build to `dist/`.
- `pnpm preview` (or `npm run preview`): Serve the built app locally.
- `pnpm lint` (or `npm run lint`): Run ESLint over the repo.

## Coding Style & Naming Conventions
- **Language:** TypeScript (strict). JSX via `react-jsx`.
- **Linting:** ESLint with `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`.
- **Indentation:** 2 spaces; single quotes; semicolons consistent with existing code.
- **Names:** Components in PascalCase (`Header.tsx`), hooks/utilities in camelCase, files end with `.tsx/.ts`.
- **Imports:** Relative paths; keep barrel files minimal. Tailwind for styling; avoid inline styles when a utility class exists.

## Testing Guidelines
- No test framework is configured yet. If adding tests, use Vitest + React Testing Library.
  - Place tests as `*.test.ts(x)` co-located with components or under `src/__tests__/`.
  - Aim for meaningful coverage of routing and component logic (target ≥80% where feasible).
  - Example: `pnpm add -D vitest @testing-library/react @testing-library/user-event jsdom` and wire `vite` test config.

## Commit & Pull Request Guidelines
- **Commits:** Use clear, imperative messages; keep scope focused.
  - Examples: `fix: address preview deployment error`, `feat: add TipsSection animations`, `chore: update partners assets`.
- **PRs:**
  - Description of changes and rationale.
  - Link related issues/tasks.
  - Screenshots/GIFs for UI changes.
  - Note any env/config needs (e.g., `.env` keys).

## Security & Configuration Tips
- Environment variables must be prefixed with `VITE_` to be exposed in the client (e.g., `VITE_API_URL=`). Do not commit secrets.
- Prefer `public/` for static, cacheable files; import from `assets/` when bundling is desired.
- Vite dev server allows external hosts; review `vite.config.ts` before exposing dev servers.
