export default props => ({
  name: {
    ...props.text.body1,
    '& > span': {
      margin: {
        right: 5
      }
    }
  },
  email: {
    ...props.text.light
  }
})