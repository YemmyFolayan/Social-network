import React, { Component } from 'react';
import {login} from 'graphql/mutations';
import {compose, graphql} from 'react-apollo';
import {Container, Row, Col} from 'reactstrap';
import styles from './style';
import injectStyles from 'react-jss';
import classNames from 'classnames';

import AuthForm from './Form';


const fields = [{
  name: 'email',
  placeholder: 'Email...',
  type: 'email'
}, {
  name: 'password',
  placeholder: 'Password...',
  type: 'password'
}]

class Login extends Component {
  state = {
    errors: [],
    loading: false
  }

  handleSubmit = (variables) => {
    this.setState({loading: true, errors: []}, () => {
      this.props.login({variables})
      .then(res => window.location.replace('/home'))
      .catch(err => this.setState({
        errors: err.graphQLErrors,
        loading: false
      }))
    })
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.page}>
        <Container fluid>
          <Row className={classes.fullheight}>
            <Col className={classNames(classes.left, 'd-none d-sm-flex')} sm={5}>
              <h1 className={classes.title}>Login</h1>
            </Col>

            <Col style={{flex: 1}} sm={7}>
              <Row className={classes.center}>
                <Col sm={{size: 6}}>
                  <h3>Login</h3>
                  <AuthForm 
                  fields={fields}
                  loading={this.state.loading}
                  errors={this.state.errors}
                  onSubmit={this.handleSubmit} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(login, {name: 'login'})
)(injectStyles(styles)(Login))
