export default theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '0.25rem 1rem',
    background: 'white',
    boxShadow: theme.shadows.search
  },
  input: {
    borderBottom: 'none',
    '&:focus, &:active': {
      borderBottom: 'none'
    }
  },
  group: {
    margin: {
      bottom: 0,
      top: 0
    }
  }
})