export default theme => ({
  page: {
    
  },
  fullheight: {
    minHeight: '100vh',
    ...theme.mixins.center,
    justifyContent: 'flex-start'
  },
  col: {
    textAlign: 'left'
  },
  title: {
    ...theme.text.title,
    color: theme.colors.primary.main,
    fontSize: '4.6rem',

    '@media (max-width: 768px)': {
      fontSize: '3.6rem'
    }
  },
  text: {
    ...theme.text.body1,
    fontSize: '1.4rem',
    fontWeight: theme.fonts.weight.light,
    linHeight: 1.75,
    marginBottom: '1.2rem',
    color: '#8b8b8b',
  },
  buttons: {
    '& > a': {
      marginRight: 15,
      borderRadius: 30,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,.15)',
      padding: '0.6rem 2rem'
    }
  }
})