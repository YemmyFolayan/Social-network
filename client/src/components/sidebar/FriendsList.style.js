export default theme => ({
  root: {
    padding: 5
  },
  empty: {
    color: theme.colors.text.light,
    padding: '1rem',
    fontWeight: 300,
    textAlign: 'center'
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    borderBottom: theme.borders.light,
    transition: 'all 0.2s ease-in',
    background: 'white',

    '&:hover': {
      background: 'rgb(248, 249, 250)'
    },
  },
  name: {
    fontSize: '0.9rem',
    color: theme.colors.text.body1,
    
    margin: {
      left: '0.5rem'
    },

    '& > span': {
      margin: {
        right: 5
      }
    }
  }
})