import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Collapse, FormFeedback, FormText} from 'reactstrap';
import FormButton from 'components/buttons/FormButton';

class Field extends Component {
  state = {
    open: false,
    loading: false,
    updated: false,
    value: "",
    name: ""
  }

  componentWillMount = () => {
    this.setState({name: this.props.field.name})
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({value})
  }

  toggle = () => {
    this.setState(({open}) => ({open: !open}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {value, name} = this.state;
    let update = {[name]: value}
    let id = this.props.user.id;
    this.setState({loading: true}, () => {
      this.props.handleSubmit({id, update})
        .then(() => this.setState({
          value: "",
          open: false,
          loading: false,
          updated: true
        }))
    })
  }

  inputField = ({classes, field}) => {
    let {value} = this.state;
    return <Collapse isOpen={this.state.open}>
      <Input 
      placeholder={`${field.label}...`}
      onChange={this.handleChange} 
      className={classes.input}
      name={field.name} 
      type={field.type}
      id={field.name}
      value={value}>
      {this.inputContent({field})}
      </Input>
    </Collapse>
  }

  inputContent = ({field}) => {
    return field.type === 'select' ? (
      <React.Fragment>
        <option value="">Select {field.label}</option>
        {field.options.map(option => <option 
        key={option.value} 
        value={option.value}>{option.label}</option>)}
      </React.Fragment>
    ) : null
  }

  toggleButton = ({classes, field}) => {
    return <Button className={classes.editButton}onClick={this.toggle}>
    <i className="fa fa-pencil" aria-hidden="true"></i></Button>
  }

  text = ({field, classes}) => {
    return this.state.updated ? 
    <FormFeedback className={classes.feedback} valid>Your {field.name} has been updated.</FormFeedback> :
    <FormText>{field.text}</FormText>
  }

  content = ({classes, field}) => {
    let {value} = this.state;
    return <div className={classes.fieldContent}>
      <Label className={classes.label} for={field.name}>{field.label}</Label>
      {this.inputField({classes, field, value})}
      {this.text({classes, field})}
    </div>
  }

  submitButton = ({classes, field}) => {
    let {value, open, loading} = this.state;
    return open && value && 
    <FormButton size="sm"
    loading={loading} 
    className={classes.updateButton}>Update</FormButton>
  }

  render() {
    let {classes, field} = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className={classes.group}>
          {this.content({classes, field})}
          {this.toggleButton({classes, field})}
          {this.submitButton({classes, field})}
        </FormGroup>
      </Form>
    );
  }
}

export default Field