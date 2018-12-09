import React, { Component } from 'react';
import PeopleYMK from './PeopleYMK';
import {peopleYouMayKnow} from 'graphql/queries';
import {compose, graphql} from 'react-apollo';

class index extends Component {
  render() {
    let {people} = this.props;
    let {peopleYouMayKnow} = people

    return (
      <PeopleYMK people={peopleYouMayKnow} />
    );
  }
}

export default compose(
  graphql(peopleYouMayKnow, {name: 'people'})
)(index)
