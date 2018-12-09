export default theme => ({
  menu: {
    right: -42,
    marginTop: 23,
    border: '1px solid rgba(0, 0, 0, 0.01)',
    boxShadow: theme.shadows.navbar,
    borderRadius: 0,
    '&:after, &:before': {
      transform: 'rotate(135deg) translateY(-50%)',
      width: '20px',
      height: '20px',
      background: 'white',
      position: 'absolute',
      top: '-15px',
      right: '50px',
      content: '""',
    },
      '&:before': {
        boxShadow: '-1px 1px 3px rgba(57,73,76,0.1)',
        zIndex: -1
      }
  },
  card: {
    minWidth: 350,
    maxHeight: 410,
    overflowY: 'auto',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'initial'
    }
  },
  dropdownItem: {
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    borderBottom: theme.borders.light,
    '& > i': {
      marginRight: 10,
      color: theme.colors.text.light
    }
  },
  friendRequest: {

  },
  top: {
    margin: {
      bottom: 5
    },
    '& > a': {
      fontSize: '0.85rem'
    }
  },
  empty: {
    color: theme.colors.text.light
  },
  name: {
    '& > span': {
      marginRight: 5
    }
  },
  text: {
    ...theme.text.light,
    margin: {
      bottom: 10,
      left: 0
    }
  },
  options: {
    '& > button': {
      ...theme.buttons.small,
      borderRadius: 0,
      margin: {
        right: 15
      }
    }
  }
})