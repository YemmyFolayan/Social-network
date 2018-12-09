export default props => ({
  list: {
    border: 'none',
    marginBottom: 15
  },
  listItem: {
    background: 'transparent',
    transition: 'all 0.2s ease-in',
    border: 'none',
    color: props.colors.text.body2,
    '&.active': {
      color: props.colors.primary.main,
      background: 'white',
      boxShadow: props.shadows.card
    }
  },
  title: {
    ...props.text.title,
    fontSize: '2.4rem',
    marginBottom: '2rem'
  },
  group: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    paddingTop: 0
  },
  label: {
    marginBottom: 0
  },
  fieldContent: {
    flex: 1
  },
  editButton: {
    marginLeft: 25,
    borderRadius: '50%',
    background: 'white',
    border: 'none',
    boxShadow: props.shadows.card,
    '&.btn:hover, &.btn:active, &.btn:focus': {
      background: ['white', '!important'],
      boxShadow: [props.shadows.card, '!important']
    },
    '& > i': {
      color: props.colors.primary.main,
      fontSize: '1rem'
    }
  },
  updateButton: {
    marginLeft: 15
  },
  feedback: {
    display: 'block'
  }
})