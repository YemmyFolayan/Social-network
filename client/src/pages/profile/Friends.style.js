export default theme => ({
  root: {
    marginTop: 15
  },
  title: {
    ...theme.text.strong1
  },
  friends: {

  },
  friend: {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: theme.borders.light
  },
  info: {
    flex: 1,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 992px) and (min-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& > button': {
        marginTop: 5
      }
    }
  },
  name: {
    '& > span': {
      marginRight: 5
    }
  },
  email: {
    ...theme.text.light
  },
  button: {
    ...theme.buttons.small,
    borderRadius: 0,
    fontSize: ['0.8rem', '!important']
  }
})