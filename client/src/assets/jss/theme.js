const colors = {
  primary: {
    main: '#8065ff',
    dark1: '#6852d1',
    light1: '#9f8bfc'
  },
  text: {
    body1: '#626161',
    body2: '#828282',
    light: '#acacac',
    strong: '#111111'
  },
  link: '#8065ff'
}

const shadows = {
  navbar: '0 1px 7px 0 rgba(33,38,44,.07)',
  card: '0 1px 3px 0 rgba(0,0,0,0.1)',
  search: '2px -2px 7px rgba(33,38,44,.07)'
}

const backgrounds = {
  gradient1: 'linear-gradient(45deg,#6078ff,#8660fe)',
  page: 'rgb(248, 249, 250)'
}

const fonts = {
  family: {
    main: "'Open Sans', sans-serif",
    alt: "'Montserrat', sans-serif"
  },
  weight: {
    xlight: 100,
    light: 300,
    normal: 400
  }
}

const text = {
  strong1: {
    color: colors.text.strong,
    fontSize: '1.05rem'
  },
  strong2: {
    color: colors.text.strong,
    fontSize: '0.8rem'
  },
  body1: {
    color: colors.text.body1,
    fontWeight: fonts.weight.normal,
    fontSize: '1rem'
  },
  body2: {
    color: colors.text.body2,
    fontSize: '0.95rem',
  },
  light: {
    color: colors.text.light,
    fontSize: '0.8rem'
  },
  title: {
    fontFamily: fonts.family.alt,
    fontWeight: fonts.weight.xlight
  }
}

const mixins = {
  fullHeight: {
    
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const buttons = {
  small: {
    fontSize: '0.85rem',
    padding: '.1rem .75rem'
  }
}

const borders = {
  light: '1px solid rgba(0, 0, 0, .045)'
}

export default {
  colors,
  fonts,
  text,
  shadows,
  backgrounds,
  mixins,
  buttons,
  borders
}