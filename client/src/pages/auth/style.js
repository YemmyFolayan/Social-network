export default props => ({
  left: {
    ...props.mixins.center,
    background: props.backgrounds.gradient1
  },
  fullheight: {
    minHeight: '100vh'
  },
  center: {
    flex: 1,
    ...props.mixins.center,
    height: '100%'
  },
  title: {
    ...props.text.title,
    color: 'white',
    fontSize: '4rem'
  }
})