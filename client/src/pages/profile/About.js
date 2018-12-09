import React, { Component } from 'react';
import {Card, CardBody, Button} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './About.style';


class About extends Component {
  state = {
    full: false
  }

  full = () => {
    this.setState({full: true})
  }

  excerpt = (text, len) => {
    return !this.state.full ?
      <span>
        {text.slice(0, len)}
        {<Button 
        color="link" 
        className={this.props.classes.more}
        onClick={this.full}>...more</Button>}
      </span> : <span>{text}</span>
  }

  render() {
    let {classes, user} = this.props;

    return (
      <Card className={classes.root}>
        <CardBody>
          <h4 className={classes.title}>About me</h4>

          <div className={classes.about}>
            <p>{user.about ? this.excerpt(user.about, 180) : 'No about info to show.'}</p>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default injectStyles(styles)(About)
