import { useEffect } from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import { fontVariables } from '../src/styles/fonts'
import '../src/app/globals.css'

/**
 * Theme has THREE states, not two — the same model the tokens use:
 *   light  → stamps data-theme="light"
 *   system → stamps nothing, so prefers-color-scheme decides (the default a
 *            real viewer gets, and the state most likely to hide a bug)
 *   dark   → stamps data-theme="dark"
 *
 * "System" is in the switcher deliberately. A token defined only inside a
 * media or [data-theme] block renders correctly in both explicit states and
 * breaks only in the un-stamped one, so it is the state worth testing against.
 */
const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'TrainerTwin colour theme',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'system', title: 'System', icon: 'browser' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  // 'light' is the deliberate default, 11 Sep 2026 — matches the app, which now
  // stamps data-theme="light" on every visitor rather than following the OS.
  // 'system' stays a toolbar option: it is still the state most likely to hide
  // a bug, so switch to it when checking a new component.
  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'system' | 'dark'

      useEffect(() => {
        const root = document.documentElement
        if (theme === 'system') root.removeAttribute('data-theme')
        else root.setAttribute('data-theme', theme)
      }, [theme])

      return (
        <div className={fontVariables} style={{ padding: 'var(--tt-space-6)' }}>
          <Story />
        </div>
      )
    },
  ],

  parameters: {
    layout: 'centered',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'error' rather than 'todo': the palette was chosen around specific
      // contrast thresholds, so a regression here is a real defect, not a note.
      test: 'error',
    },
  },
}

export default preview
