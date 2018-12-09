export default theme => ({
  root: {
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100vh',
    width: 250,
    display: 'flex',
    overflow: 'auto',
    boxShadow: theme.shadows.navbar,
    transition: 'all 0.2s linear',

    '&.hide': {
      transform: 'translateX(250px)'
    }
  },
  card: {
    flex: 1,
    padding: {
      top: 50
    }
  },
  body: {
    padding: 0,
    position: 'relative'
  }
})