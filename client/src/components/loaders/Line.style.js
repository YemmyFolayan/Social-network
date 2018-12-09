export default theme => {
  return {
    root: props => ({
      width: props.width,
      height: props.height,
      backgroundColor: props.color,
      marginBottom: props.margin.bottom,
      position: 'relative'
    }),
    effect: props => ({
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      background: `linear-gradient(to right, ${props.color} 8%, ${props.lightColor} 18%, ${props.color} 33%)`,
      backgroundPosition: '0 0',
      backgroundSize: '800px 104px',
      animationName: 'shimmer',
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    }),
    '@keyframes shimmer': {
      '0%': {
        backgroundPosition: '-500px 0'
      },
      '100%': {
        backgroundPosition: '500px 0'
      }
    }
  }
}