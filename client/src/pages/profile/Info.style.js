export default props => ({
  root: {
    marginTop: 15
  },
  title: {
    ...props.text.strong1
  },
  about: {
    '& > p': {
      ...props.text.body2,
      marginBottom: 0
    }
  },
  info: {
    display: 'table'
  },
  item: {
    display: 'table-row',
    '& > h5': {
      color: props.colors.text.body1,
      textTransform: 'capitalize',
      display: 'table-cell',
      paddingBottom: 10,
      fontSize: '0.85rem'
    },
    '& > p': {
      paddingLeft: 10,
      display: 'table-cell',
      ...props.text.light,
      textTransform: 'capitalize'
    }
  }
})