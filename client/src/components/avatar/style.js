export default theme => ({
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: ({margin}) => margin.right,
    marginLeft: ({margin}) => margin.left,
    width: props => props[props.size || 'md'].width,
    height: props => props[props.size || 'md'].height,
  },
  img: {
    width: props => props[props.size || 'md'].width,
    height: props => props[props.size || 'md'].height,
  }
})