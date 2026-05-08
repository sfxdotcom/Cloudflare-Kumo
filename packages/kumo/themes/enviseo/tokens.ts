/**
 * Enviseo brand tokens — typed export for Kumo consumers.
 * Generated from the Enviseo style guide.
 */

export const enviseoTokens = {
  color: {
    primary: "#0c1b30",
    primaryForeground: "#ffffff",
    secondary: "#588ffe",
    secondaryForeground: "#0c1b30",
    tertiary: "#1e2f47",
    tertiaryForeground: "#ffffff",
    accent: "#00b7f9",
    accentForeground: "#0c1b30",
    base: "#010619",
    neutral: "#161616",

    background: "#ffffff",
    foreground: "#0c1b30",
    muted: "#f4f6fb",
    mutedForeground: "#5b6577",
    border: "#e4e8f0",
    ring: "#588ffe",

    success: "#29a745",
    danger: "#dc3545",
    warning: "#ffc10a",
    info: "#2cb1e8",
  },

  font: {
    display: '"Clash Grotesk", "Inter", system-ui, -apple-system, sans-serif',
    sans: '"Inter", system-ui, -apple-system, sans-serif',
  },

  text: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.333rem",
    xl: "1.777rem",
    "2xl": "2.369rem",
    "3xl": "3.157rem",
    "4xl": "4.209rem",
  },

  space: {
    xs: "0.83125rem",   // 13.3px
    s: "1.25rem",       // 20px
    m: "1.875rem",      // 30px
    l: "2.8125rem",     // 45px
    xl: "4.21875rem",   // 67.5px
    xxl: "6.328125rem", // 101.25px
  },

  radius: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
  },

  shadow: {
    m: "0 1px 2px rgba(12, 27, 48, 0.04), 0 2px 6px rgba(12, 27, 48, 0.05)",
    l: "0 2px 6px rgba(12, 27, 48, 0.05), 0 8px 24px rgba(12, 27, 48, 0.08)",
    xl: "0 4px 12px rgba(12, 27, 48, 0.08), 0 16px 40px rgba(12, 27, 48, 0.12)",
  },
} as const

export type EnviseoTokens = typeof enviseoTokens
