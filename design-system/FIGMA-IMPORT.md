# Getting TrainerTwin tokens into Figma (free, ~10 minutes)

The Figma MCP quota on the Starter plan is exhausted, so the library could not be
built programmatically. This is the manual path, and it needs no upgrade.

Target file: https://www.figma.com/design/XnHrBLd6nKXrgNilDvPsHm

## Before you start

Two facts about the FREE tier that determine every step below:

- Export runs from **Token Sets**, not Themes. Themes export is Pro.
- **Each token set becomes one variable collection, named after the set.**
  That is why the sets are named `Primitives`, `Spacing`, `Radius`,
  `Color Light`, `Color Dark` — those are your collection names.

## Steps

1. Open the Figma file. **Plugins → Tokens Studio for Figma** (install if needed).

2. Create nine token sets with these EXACT names (the `+` in the sets panel):

       Primitives
       Spacing
       Radius
       Border
       Container
       Layer
       Icon
       Color Light
       Color Dark

   Names must match exactly — they become the collection names, and the
   aliases resolve by set membership.

3. For each set: select it, toggle **JSON view** (top-right of the Tokens page),
   paste the matching file from `design-system/tokens-studio/`, then hit the
   save action at the bottom. Toggle back to list view.

   (If your plugin version has Tools → "Load from file/folder", you can instead
   load `design-system/trainertwin.tokens.json` once and skip this step.)

4. **Set all nine sets to Enabled** — the checkmark icon, not the curly-bracket
   "Reference Only" icon.

   THIS IS THE STEP THAT MATTERS. If `Primitives` is left as Reference Only it
   is not exported as variables, and all 50 semantic aliases collapse into raw
   hex values. You lose the entire aliasing layer — editing `orange/500` would
   stop cascading. Enabled is what keeps semantic tokens pointing at primitives.

5. **Styles & Variables** button → tick **Variables** → **Export to Figma**.
   On the free tier this takes you straight to the Token Sets page. Select all
   nine sets → **Export to Figma**.

## Verify it worked

In Figma, open the local variables panel. You should see:

    Primitives     53   raw hex, no aliases
    Spacing        12   numbers
    Radius          5   numbers
    Border          3   numbers
    Container       4   numbers
    Layer           8   numbers (z-index)
    Icon            5   numbers
    Color Light    29   every value an ALIAS to a Primitives variable
    Color Dark     29   every value an ALIAS to a Primitives variable
    ----------------------------------------
    TOTAL         148

If Color Light shows raw hex instead of alias chips, step 4 was missed.
Delete those collections and redo the export with Primitives Enabled.

## What you do NOT get on Starter

- **Light and Dark are two collections, not two modes.** Figma Starter caps
  collections at one mode — verified: "in addMode: Limited to 1 modes only".
  There is no theme toggle. Bind components to `Color Light`.
- **The file cannot be published as a library.** Other files cannot subscribe.
  Components are usable inside this file and by copy-paste only.

Both limits are plan limits, not import limits — no plugin can work around them.
On Professional the two collections collapse into one with Light/Dark modes.

## Regenerating

Never hand-edit these files. They are generated from `src/styles/tokens.css`,
the single source of truth. Regenerate after any token change.

Sources:
- https://docs.tokens.studio/figma/export/token-sets
- https://docs.tokens.studio/figma/export/
- https://docs.tokens.studio/manage-tokens/token-sets/json-view
