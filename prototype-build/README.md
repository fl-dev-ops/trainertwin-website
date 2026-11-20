# storybook-build: the V3 prototype rebuilt from the Storybook components

Served at http://localhost:8791/storybook-build/index.html (the `prototype` launch config, root `onboarding-prototype/`).
It is a React app built from `src/components` (the Storybook library) and bundled by Vite into
`onboarding-prototype/storybook-build/`. **It never reads or writes `onboarding-prototype/v3`**; the only things copied
from v3 are icon paths and sample data, extracted once into `src/generated.ts`.

    npm run build:prototype      # build once
    npm run watch:prototype      # rebuild on change
    node scripts/prototype-build/compare.mjs setup light|dark   # diff against the real v3, element by element

- `src/App.tsx`: the shell (NavRail, main sheet, theme, hash routing).
- `src/pages/`: one file per page, composing Storybook components.
- `src/local/`: anything that had to be written here because Storybook has no component yet. Each file starts
  with "NOT IN STORYBOOK YET". These are the candidates to promote.

## Pages (left-nav order)

Twin agents, Twin sessions, Twin users, Twin's brain, Scenarios, Roleplay sessions, Persona, Usage, Billing, Settings,
plus the Support dialog (the rail's Support item). Sample rows are scraped read-only from the rendered v3 by
`scripts/prototype-build/extract.mjs <nav id>` into `src/data/`.

    node scripts/prototype-build/compare-text.mjs <nav id> [light|dark] [--shot]
    # matches elements by their text in v3 and here, lists position / size / colour differences
