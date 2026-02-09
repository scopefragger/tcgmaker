# TCGMaker AI Coding Guidelines

## Project Overview
**TCGMaker** is a Pokémon Trading Card Game (TCG) puzzle platform built with **Vite + React + Tailwind CSS**. The app presents challenging one-turn victory scenarios where users must master TCG rules and find the correct sequence of plays to win.

## Architecture

### Tech Stack
- **Build Tool**: Vite (configured with React plugin, `base: './'` for folder-relative deployment)
- **Styling**: Tailwind CSS 4.1 + PostCSS + Autoprefixer
- **UI Framework**: React with functional components
- **Icons**: lucide-react (Play, Trophy, BookOpen, ShieldAlert)

### File Structure
```
app.jsx                    # Root App component with hero section and puzzle grid
components/Home.jsx        # Home component with puzzle selection UI
src/main.js               # React entry point (imports App from ../app.jsx)
index.html                # HTML entry point (mounts React at #root, imports src/main.js)
src/background.jpg        # Background image
```

### Component Patterns
- **App.jsx**: Hero section with puzzle preview cards; contains `<PuzzleCard>` subcomponent
- **Home.jsx**: Main puzzle selection interface; contains `<InfoCard>` and `<PuzzleCard>` subcomponents
- Uses props for configuration (title, difficulty, desc, onSelectPuzzle callbacks)
- Puzzle data defined as array in Home.jsx: `{ id, title, difficulty, reward }`

## Styling Conventions
- **Tailwind Utility-First**: All styling via className (no CSS modules or styled-components)
- **Dark Theme**: slate-900 backgrounds, slate-800 borders, blue-400/purple gradients
- **Responsive**: md/lg breakpoints for grid layouts (e.g., `grid md:grid-cols-3 lg:grid-cols-3`)
- **Interactive States**: `hover:border-blue-500`, `group-hover:bg-blue-600`, `transition-all`
- **Typography**: font-black for headers, italic styling for brand/titles, uppercase with tracking-widest

## Build & Deployment

### Development
- No explicit npm scripts in package.json—project uses Vite defaults
- Entry: `npm run dev` (Vite default) starts dev server

### Production
- Build command: `npm run build` (Vite builds to `dist/`)
- CI/CD: `.github/workflows/deploy.yaml` (implied by deploy.yaml in root)
  - Triggers on push to `main`
  - Runs `npm install` → `npm run build`
  - Uploads `dist/` to GitHub Pages
- Key config: Vite's `base: './'` ensures app works in any GitHub Pages subdirectory

## Code Conventions
1. **Component Structure**: Default exports, destructured props, inline subcomponents for small UI pieces
2. **Naming**: PascalCase components (App, Home, PuzzleCard, InfoCard)
3. **Arrays**: Puzzle data as const arrays with descriptive object keys (id, title, difficulty)
4. **Icons**: Import from lucide-react with className for color (e.g., `<Trophy className="text-yellow-400" />`)
5. **Tailwind**: Use semantic colors (blue-400, purple-600, slate-900), avoid arbitrary values

## Key Integration Points
- **Lucide Icons**: Replace/add icons by importing from lucide-react; apply Tailwind colors via className
- **Puzzle Data**: Add new puzzles to `puzzles` array in `Home.jsx`; pass to `<PuzzleCard>` via spread or individual props
- **Styling**: Extend via Tailwind config (`tailwind.config.js`—currently uses theme.extend: {})
- **Background**: Static image at `src/background.jpg`; referenced in `index.css` (note: incomplete CSS rule, may need fixing)

## Common Tasks
- **Add Puzzle**: Update `puzzles` array in Home.jsx with new `{ id, title, difficulty, reward }`
- **Change Colors**: Modify Tailwind classes (e.g., `from-blue-400` → `from-pink-400`)
- **Fix Build**: Check `package.json` for React dependencies; ensure Vite config includes `@vitejs/plugin-react`
- **Adjust Layout**: Use Tailwind grid/flex classes; test responsive breakpoints

## Known Quirks
- `package.json` appears minimal—verify React and Vite are installed if build fails
- `index.css` has incomplete CSS rule (background-image without closing `}`)—review before styling changes
- App imports `App` from `../app.jsx` (parent directory), not from src/; maintain this structure
