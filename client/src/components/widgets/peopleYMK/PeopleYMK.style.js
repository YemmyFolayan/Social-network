export default theme => ({
  card: {
    padding: '1.25rem'
  },
  title: {
    ...theme.text.body1
  },
  avatar: {
    margin: '10px auto'
  },
  item: {
    textAlign: 'center',
    padding: 10,
    margin: {
      bottom: 5
    }
  },
  name: {
    ...theme.text.body2,
    '& > span': {
      margin: {
        right: 5
      }
    }
  },
  arrows: {
    position: 'relative',

    '& > i': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      fontSize: 20
    }
  },
  controls: {
    padding: {
      top: 5
    }
  }
})