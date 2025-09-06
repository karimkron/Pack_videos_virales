/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_STRIPE_BUY_BUTTON_ID_COMPLETE: string
  readonly VITE_STRIPE_BUY_BUTTON_ID_BASIC: string
  readonly VITE_DRIVE_LINK_COMPLETE: string
  readonly VITE_DRIVE_LINK_BASIC: string
  readonly VITE_SUCCESS_URL: string
  readonly VITE_CANCEL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}