export default props => ({
  root: {
    marginTop: 15
  },
  title: {
    ...props.text.strong1
  },
  about: {
    '& > p': {
      ...props.text.body2,
      marginBottom: 0
    }
  },
  more: {
    padding: 0,
    fontSize: '0.95rem',
    marginLeft: 5,
    border: 'none'
  }
})