/** @type {import('tailwindcss').Config} */

// Se recomienda que el tamaño de las imágenes que se agreguen a la pagina
// sea de 1920x1080 pixeles, ya que se adecua a los breakpoints de pantalla
// y puede recortarse a 1080x1080 en caso de ser necesaria la resolución 1:1

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',

      bg_purple_light: '#400640', // Section boxes.
      bg_purple: '#380042', // Base background color. **
      bg_purple_dark: '#380042', // Space, texts, icons.

      bg_accent_light: '#602F35', // Dialog or info boxes.
      bg_accent: '#591934', // Most important action box or cards.
      bg_accent_dark: '#4D173B', // Less important action box or cards.

      txt_white: '#FEFADC', // Base text color. **
      txt_white_purple: '#F2C9F0', // Less important texts.

      primary: '#DB7C00', // Most important button, usually CTAs. **
      primary_dark: '#8C5A2E', // Less important CTA button and info cards.

      secondary: '#FEEA00', // Highlight, images. (not use too much this color). **

      accent: '#E4007C', // Other buttons (no CTA), icons, highlights. **
      accent_dark: '#A6037A'// Cards, boxes, less important highlights and icons.

      // The ** are the 5 main colors of the palette.
    },
    extend: {}
  },
  plugins: []
}
