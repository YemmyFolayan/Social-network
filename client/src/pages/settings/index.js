import React, { Component } from 'react';
import {Switch, Route, NavLink } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Card, CardBody} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './style';
import {compose, graphql} from 'react-apollo';
import {Contact, Profile, Address} from './routes';
import {getProfile} from 'graphql/queries';

class Settings extends Component {
  render() {
    let {classes, profile, user} = this.props;

    return (
      <div className='page with-bg'>
        <Container>
          <Row>
            <Col md={4}>
              <ListGroup className={classes.list}>
                <ListGroupItem 
                exact tag={NavLink} to="/settings"
                className={classes.listItem}>
                Contact info</ListGroupItem>
                <ListGroupItem 
                tag={NavLink} to="/settings/profile"
                className={classes.listItem}>
                Profile info</ListGroupItem>
                <ListGroupItem 
                tag={NavLink} to="/settings/address"
                className={classes.listItem}>
                Address</ListGroupItem>
              </ListGroup>
            </Col>

            <Col md={8}>
              <Card>
                <CardBody>
                  <Switch>
                    <Route exact path='/settings' render={() => <Contact user={user} data={profile} />} />
                    <Route exact path='/settings/profile' render={() => <Profile user={user} data={profile} />} />
                    <Route exact path='/settings/address' render={() => <Address user={user} data={profile} />} />
                  </Switch>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default compose(
  graphql(getProfile, {
    name: 'profile',
    options: (props) => ({
      variables: {
        id: props.user.id
      }
    })
  })
)(injectStyles(styles)(Settings))