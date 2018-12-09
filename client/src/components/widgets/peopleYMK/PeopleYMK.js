import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './PeopleYMK.style';
import {Card, CardBody} from 'reactstrap';
import Avatar from 'components/avatar';
import Slider from 'react-slick';
import FriendButton from 'components/buttons/FriendButton';
import {withApollo} from 'react-apollo';
import {current} from 'graphql/queries';
import {Link} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const iconStyle = {
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: '#cecece',
  fontSize: 20
}


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i style={iconStyle} className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i style={iconStyle} className="fa fa-angle-left" aria-hidden="true"></i>
    </div>
  );
}


class PeopleYMK extends Component {
  list = () => {
    let {people, classes, client} = this.props;
    let user = client.readQuery({query: current})

    if(!people) {
      return null;
    }

    return people.map(person => {
      return <div key={person.id} className={classes.item}>
        <Avatar className={classes.avatar} img={person.img} />

        <Link to={`/profile/${person.id}`} className={classes.name}>
          <span>{person.firstName}</span>
          <span>{person.lastName}</span>
        </Link>

        <div className={classes.controls}>
          <FriendButton person={person.id} user={user.user} size="sm" />
        </div>
      </div>
    })
  }

  render() {
    let {classes} = this.props;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className={classes.arrows} />,
      prevArrow: <SamplePrevArrow className={classes.arrows} />,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }]
    };

    return (
      <div>
        <Card className={classes.card}>
          <h3 className={classes.title}>People you may know</h3>

          <CardBody>
            <Slider {...settings}>
              {this.list()}
            </Slider>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withApollo(injectStyles(styles)(PeopleYMK))
