import React, { Component } from 'react';
import {Form, FormGroup, Input, CardBody, FormFeedback} from 'reactstrap'
import styles from './CommentForm.style';
import injectStyles from 'react-jss';
import classNames from 'classnames';

class CommentForm extends Component {
  state = {
    body: "",
    loading: false,
    errors: []
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value, errors: []})
  }

  handleSubmit = e => {
    e.preventDefault();
    let body = this.state.body.trim();

    if(!body) {
      return this.setState({
        errors: ['Please add some text.']
      })
    }

    this.setState({loading: true}, () => {
      this.props.onSubmit(body).then(res => {
        this.setState({
          loading: false,
          body: ""
        })
      })
    })
  }

  render() {
    let {classes} = this.props;
    let {errors, loading, body} = this.state;
    let spinnerClass = classNames(
      `fa fa-spinner fa-spin form-spinner`,
      classes.spinner,
      {show: loading}
    )

    return (
      <CardBody className={classes.form}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className={classes.group}>
            <Input
            name="body"
            value={body}
            readOnly={loading}
            invalid={!!errors.length}
            className={classes.input}
            onChange={this.handleChange} 
            placeholder="Add your comment..." />
            <i className={spinnerClass}></i>

            <FormFeedback>{errors[0]}</FormFeedback>
          </FormGroup>
        </Form>
      </CardBody>
    );
  }
}

export default injectStyles(styles)(CommentForm)
