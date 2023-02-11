module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [],
  theme: {
    letterSpacing: {
      wide: '10%',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    spacing: {
      0: '0',
      0.25: '4px',
      0.5: '6px',
      1: '8px',
      2: '12px',
      3: '16px',
      3.5: '18px',
      4: '24px',
      4.5: '28px',
      5: '32px',
      5.5: '40px',
      6: '48px',
      7: '56px',
      7.5: '60px',
      8: '64px',
      8.5: '68px',
      9: '72px',
      9.5: '75px',
      10: '80px',
      12: '96px',
      13: '110px',
      15: '120px',
      18: '140px',
      20: '160px',
      25: '200px',
    },
    extend: {
      width: {},
      height: {},
      maxWidth: {
        container: '1300px',
      },
      minWidth: {},
      maxHeight: {},
      fontSize: {},
      borderColor: (theme) => ({
        ...theme('colors'),
        error: '#CC3E3E',
        success: '#20852B',
        DEFAULT: theme('colors.gray.3', 'currentColor'),
      }),
      borderRadius: {
        basic: '8px',
      },
      screens: {},
      boxShadow: {
        card: '0 0 50px #00000022'
      },
      brightness: {},
      transitionDuration: {},
      transitionDelay: {},
      animation: {},
      keyframes: {},
      gridAutoColumns: {},
      gridTemplateColumns: {},
      gridTemplateRow: {},
      gap: {},
    },

    fontSize: {
      'default-mobile': [
        '16px',
        { lineHeight: '18px', letterSpacing: '-0.02em' },
      ],
      'default-desktop': [
        '16px',
        { lineHeight: '22px', letterSpacing: '-0.02em' },
      ],

      'xxs-mobile': ['12px', { lineHeight: '16px', letterSpacing: '0' }],
      'xxs-desktop': ['14px', { lineHeight: '18px', letterSpacing: '0' }],
      'xs-mobile': ['16px', { lineHeight: '22px', letterSpacing: '0' }],
      'xs-desktop': ['16px', { lineHeight: '22px', letterSpacing: '0' }],
      'base-mobile': ['20px', { lineHeight: 'auto', letterSpacing: '0' }],
      'xl-mobile': ['26px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      'xl-mobile': ['32px', { lineHeight: 'auto', letterSpacing: '-0.02em' }],

      xxs: ['10px', { lineHeight: '14px', letterSpacing: '0' }],
      xs: ['12px', { lineHeight: '16px', letterSpacing: '0' }],
      base: ['16px', { lineHeight: '20px', letterSpacing: '0' }],
      lg: ['18px', { lineHeight: '24px', letterSpacing: '0' }],

      select: ['13px', { lineHeight: '16px', letterSpacing: '0' }],

      // Titles
      '5xl': ['40px', { lineHeight: '44px', letterSpacing: '-0.03em' }],
      '4xl': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      '3xl': ['26px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      '1xl': ['22px', { lineHeight: '28px', letterSpacing: '-0.02em' }],

      // Hero
      hero: ['64px', { lineHeight: '70px', letterSpacing: '-0.03em' }],

      // Statics
      12: ['12px', { lineHeight: '16px', letterSpacing: '0' }],
      13: ['13px', { lineHeight: '15.6px', letterSpacing: '0' }],
      14: ['14px', { lineHeight: '18px', letterSpacing: '0' }],
      16: ['16px', { lineHeight: '22px', letterSpacing: '0' }],
      18: ['18px', { lineHeight: '24px', letterSpacing: '0' }],
      20: ['20px', { lineHeight: '24px' }],
      26: ['26px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      32: ['32px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
      40: ['40px', { lineHeight: '48px', letterSpacing: '0' }],
      24: ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      22: ['22px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      30: ['30px', { lineHeight: '30px', letterSpacing: '-0.02em' }],
      54: ['54px', { lineHeight: '134%', letterSpacing: '-0.02em' }],
      64: ['64px', { lineHeight: '70px', letterSpacing: '-0.03em' }],
    },

    fontFamily: {
      sans: ['Messina Sans', 'sans-serif'],
    },

    colors: {
      black: '#0a0a0a',
      white: '#FFFFFF'
    },
  },
};
