import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import styles from './style';
import injectStyles from 'react-jss';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.page}>
        <Container>
          <Row className={classes.fullheight}>
            <Col lg={{size: 7}} className={classes.col}>
              <h1 className={classes.title}>Social network</h1>
              <p className={classes.text}>Social network platform with user registration and friends system implemented with React and React-apollo on front end and Express and Mongodb on back-end.</p>
              
              <div className={classes.buttons}>
                <Button tag={Link} to="/login" color="primary">Login</Button>
                <Button tag={Link} to="/signup" color="white">Signup</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default injectStyles(styles)(Landing)