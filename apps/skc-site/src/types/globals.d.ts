// Global type declarations

declare global {
  interface Window {
    gtag?: (
      command: 'consent' | 'event' | 'config',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export {};
