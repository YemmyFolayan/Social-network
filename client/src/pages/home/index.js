import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import PostsForm from 'components/posts_form';
import Posts from './Posts';
import PeopleYMK from 'components/widgets/peopleYMK';
import {Container, Row, Col} from 'reactstrap';


class Home extends Component {
  render() {
    let {match: {url}} = this.props;
    return (
      <div className='page with-bg' id="home">
        <Container>
          <Row>
            <Col lg={6}>
              <PostsForm />
              
              <Switch>
                <Route exact 
                path={`${url}`} 
                component={Posts} />
                <Route 
                path={`${url}/tags/:tag`} 
                component={Posts} />
                <Route 
                path={`${url}/author/:author`} 
                component={Posts} />
              </Switch>
            </Col>

            <Col lg={5}>
              <PeopleYMK />
            </Col>
          </Row>
        </Container>

        
      </div>
    );
  }
}

export default Home