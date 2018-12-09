export default props => ({
  '@global': {
    '.dropdown-item.active, .dropdown-item:active': {
      backgroundColor: ['#f8f9fa', '!important']
    },
    'a': {
      color: props.colors.link,
      '&:hover': {
        color: props.colors.link,
        textDecoration: 'none'
      }
    },
    '.btn': {
      fontSize: '0.95rem',
      border: 'none',

      "&:focus": {
        boxShadow: "none"
      },
      '&.btn-primary.disabled, &.btn-primary:disabled': {
          backgroundColor: props.colors.primary.light1,
          borderColor: props.colors.primary.light1
      }
    },
    '.btn-primary': {
      backgroundColor: props.colors.primary.main,
      borderColor: props.colors.primary.main,
      '&:hover': {
        backgroundColor: props.colors.primary.dark1,
        borderColor: props.colors.primary.dark1
      },
      '&:active': {
        backgroundColor: `${props.colors.primary.dark1}!important`,
        borderColor: `${props.colors.primary.dark1}!important`
      }
    },
    '.btn-white': {
      background: 'white',
      color: props.colors.text.body1,
      '&:hover, &:active': {
        background: ['white', '!important'],
        color: [props.colors.text.body1, '!important'],
      },
      '&.disabled': {
        opacity: 0.85,
        background: 'white',
        color: props.colors.text.body1,
      }
    },
    '.btn-group-sm>.btn, .btn-sm': {
      padding: '.25rem 1.2rem',
      fontSize: '0.85rem'
    },
    '.btn-link': {
      color: props.colors.link,
      '&:hover': {
        color: props.colors.link
      }
    },
    'nav.bg-light': {
      boxShadow: props.shadows.navbar,
      background: 'white !important'
    },
    '.card': {
      border: 'none',
      boxShadow: props.shadows.card
    },
    '.form-control': {
      paddingLeft: 0
    },
    '.page': {
      paddingTop: 60,
      paddingBottom: 40,
      flex: 1
    },
    '.with-bg': {
      background: props.backgrounds.page
    }
  }
})