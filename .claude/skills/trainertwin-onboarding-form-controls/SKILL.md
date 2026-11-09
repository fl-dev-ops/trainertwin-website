---
name: trainertwin-onboarding-form-controls
description: Use when adding or editing any <select>, dropdown, date input, search field or popup toolbar in the TrainerTwin onboarding prototype (onboarding/v3 app.js + app.css). Prevents the misaligned native select chevron and other control-alignment bugs.
license: Internal — TrainerTwin project only.
---

# Onboarding prototype — form controls

Applies to `onboarding/v3/app.css` and `app.js` (the Twin-enabled prototype).

## Selects: never rely on the native chevron
macOS draws the native `<select>` arrow hard against the right edge and ignores
`padding-right`, so it looks misaligned beside our pill inputs.

- Every `<select class="input">` is styled by the `select.input` block at the
  end of `app.css`: `appearance: none`, an SVG chevron as `background-image`
  (`#4A4A4A` light / `#C4C4C4` dark, same path as `menuIcon` chevrons),
  `background-position: right 12px center`, `background-size: 16px`, and
  `padding-right: 40px`.
- Always use `class="input"` on a select so it picks that up. Do not add a new
  select without it, and do not set `appearance` back to `auto`.
- If you need a different height or width (e.g. a toolbar pill), override only
  `height`, `width`, `font-size`, `border-radius` — leave the chevron
  properties alone.
- Prefer `filterDropdown(...)` for in-page filters; use a native select only
  inside dialogs / forms.

## Dates: never the browser's native calendar
The native Chrome/macOS date popup (dark grey, system fonts) doesn't match us.
- Keep the `<input type="date">` (design system: a date field always keeps its
  text input) but hide `::-webkit-calendar-picker-indicator`, draw our own
  calendar icon, and open our calendar popover on click
  (`assign-cal-open` / `renderAssignCal` in `v3/app.js`, `.assign-cal` in `app.css`).
- Spec: orange dot marks today, the dark CTA (`--tt-cta-strong` / `--tt-on-cta-strong`)
  marks the selected day, two-letter weekday initials, tabular numbers, and a
  hint line saying why days are disabled.
- Don't call `input.showPicker()`.

## Popup toolbars (e.g. Assign popup)
- Search on the left, open by default (up to 360px, fills free space), cohort
  filter select on the right. Don't fold the search into an icon again unless
  asked.
- Header row above the list mirrors the row columns (Select | Learner | Minutes |
  Access until); "Learner" aligns with the name text, not the avatar.
- Per-row controls (minutes dropdown, date picker) sit inline on the right of
  the row, under the column titles; assigned rows show them too (editable).
- Dialog width: size it so every control fits on one line (Assign popup is
  640px). Widen the dialog before shrinking controls.

## Checklist before reporting done
1. Bump `app.css?v=N` / `app.js?v=N` in `v3/index.html`.
2. Open the dialog/page in the preview, take a screenshot, and zoom on any
   select to confirm the chevron sits ~12px from the right edge, vertically
   centred.
3. No console errors.
