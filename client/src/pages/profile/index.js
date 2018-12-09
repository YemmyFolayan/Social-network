import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {compose, graphql} from 'react-apollo';
import {getProfile, postsByAuthor} from 'graphql/queries';

import Posts from 'components/posts'
import Toolbar from './Toolbar';
import Info from './Info';
import About from './About';
import Header from './Header';
import Friends from './Friends';


class Profile extends Component {
  render() {
    let {profileData, postsData, match} = this.props;
    let {getProfile: user, loading: userLoading} = profileData;
    let {postsByAuthor: posts, loading: postsLoading, fetchMore} = postsData;


    if(userLoading) return null;
    if(!userLoading && !user) return <Redirect to="/home" />

    let isSelf = false;
    if(user.id === this.props.user.id) {
      isSelf = true;
    }
    
    return (
      <div className="page with-bg">
        <Container>
          <Row>
            <Col sm={12}>
              <Header match={match} user={this.props.user} />
              <Toolbar user={user} />
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <About user={user} />
              <Info user={user} />
              <Friends isSelf={isSelf} user={user} />
            </Col>

            <Col md={7}>
              <Posts
              loading={postsLoading} 
              posts={posts}
              loadMore={() => fetchMore({
                variables: {
                  offset: posts.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    postsByAuthor: [...prev.postsByAuthor, ...fetchMoreResult.postsByAuthor]
                  });
                }
              })} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(getProfile, {
    name: 'profileData',
    options: ({match, user}) => {
      let id = match.params.id || user.id;
      if(id) return {
        variables: {id}
      }
    }
  }),
  graphql(postsByAuthor, {
    name: 'postsData',
    options: ({match, user}) => {
      let author = match.params.id || user.id;
      if(author) return {
        fetchPolicy: 'cache-and-network',
        variables: {author, offset: 0, limit: 5}
      }
    }
  })
)(Profile)
