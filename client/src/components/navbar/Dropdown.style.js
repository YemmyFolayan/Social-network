
export default props => ({
  toggle: {
    '& > span': {
      ...props.text.body2,
      marginRight: 5
    }
  },
  name: {
    '& > span': {
      ...props.text.body2,
      marginRight: 5,
      color: props.colors.primary.main
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'initial'
    }
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    '& > i': {
      marginRight: 10,
      color: props.colors.text.light
    },
    '& > a': {
      flex: 1
    }
  },
  email: {
    ...props.text.light
  },
  content: {
    padding: '1rem 0.5rem',
    marginLeft: 10
  },
  menu: {
    marginTop: 23,
    border: '1px solid rgba(0, 0, 0, 0.01)',
    boxShadow: props.shadows.navbar,
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
    minWidth: 300
  }
})