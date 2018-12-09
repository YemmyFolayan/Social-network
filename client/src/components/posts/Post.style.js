export default props => ({
  post: {
    border: '1px solid rgba(0,0,0,.075)',
    marginBottom: 10,
  },
  top: {
    '&:hover $controls > span': {
      transform: 'translateY(0)',
      opacity: 1,

      '&:nth-child(1)': {
        transitionDelay: '0s'
      },

      '&:nth-child(2)': {
        transitionDelay: '0.1s'
      },

      '&:nth-child(3)': {
        transitionDelay: '0.2s'
      },
    }
  },
  bottom: {

  },
  header: {
    paddingBottom: 0
  },
  author: {
    ...props.text.strong1,

    '& > span': {
      marginRight: 5
    }
  },
  date: {
    ...props.text.light
  },
  body: {
    paddingBottom: "1rem",
    paddingTop: "1rem"
  },
  stats: {
    paddingBottom: 0,
    paddingTop: 0,
    flexGrow: 0
  },
  statsItem: {
    marginRight: 20,
    '&:nth-child(3)': {
      marginRight: 0
    }
  },
  value: {
    marginLeft: 5
  },
  tag: {
    fontSize: "0.85rem",
    marginRight: 10
  },
  tags: {
    padding: "0 1.25rem 5px",
    marginBottom: 15
  },
  controls: {
    ...props.text.light,
    
    '& > span': {
      transform: 'translateY(-100%)',
      transition: 'all 0.2s ease-in',
      display: 'inline-block',
      opacity: 0,
      marginRight: 10,
      cursor: "pointer",

      '&:nth-child(1)': {
        transitionDelay: '0.1s'
      }
    }
  }
})