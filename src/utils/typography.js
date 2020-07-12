import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  headerFontFamily: ['poynter-oldstyle-text', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['poynter-oldstyle-text', 'Lato', 'serif'],
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 600,
  googleFonts: [
    {
      name: "Inter",
      styles: ["400", "600"],
    },
  ],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale