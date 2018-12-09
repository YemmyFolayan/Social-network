import Color from 'color';

export const selectStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #ced4da',
    boxShadow: 'none',
    borderRadius: 0,
    '&:hover': {
      cursor: 'text'
    },
    '&:focus': {
      borderBottom: '1px solid #007bff'
    },
  }),
  menu: (provided) => ({
    ...provided,
    display: 'none'
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    cursor: 'pointer'
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 300,
    color: '#acacac !important',
    fontSize: '0.85rem',
  }),
  valueContainer: provided => ({
    ...provided,
    paddingLeft: 0
  }),
  multiValue: (provided, {theme: {props}}) => {
    let color = Color(props.colors.primary.main);

    return {
      ...provided,
      border: `1px solid ${color.alpha(0.4).rgb().string()}`,
      background: color.alpha(0.05).rgb().string()
    }
  },
  multiValueLabel: (provided, {theme: {props}}) => {
    return {
      ...provided,
      color: props.colors.primary.main
    }
  }
}


export default theme => {
  return {
    form: {
      margin: {
        bottom: 10
      }
    },
    formGroup: {
      margin: {
        bottom: 10
      }
    },
    textInput: {
      padding: {
        left: 0
      }
    },
    tagButton: {
      padding: 0,
      fontSize: '0.85rem'
    },
    formfeedback: {
      margin: {
        bottom: 5,
        top: 5
      }
    },
    submitButton: {
      display: 'flex',
      alignItems: 'center'
    },
    spinner: {
      color: '#e1eaf3',
    }
  }
}