export default props => ({
  comment: {
    padding: "1.25rem",
    paddingTop: 0,
    maxWidth: "90%",
  },
  text: {
    ...props.text.body2,
    marginBottom: 0
  },
  author: {
    ...props.text.strong2,

    '& > span': {
      marginRight: 5
    }
  },
  date: {
    ...props.text.light
  },
  controls: {
    ...props.text.light,

    '& > span': {
      marginRight: 10,
      cursor: "pointer"
    }
  }
})