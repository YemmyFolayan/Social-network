import React, { Component } from 'react';
import {Card, CardBody, Form, FormGroup, Input, FormFeedback, Button, Collapse} from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';
import injectStyles from 'react-jss';
import classNames from 'classnames';
import styles, {selectStyles} from './Form.style';
import FormButton from 'components/buttons/FormButton';

class PostForm extends Component {
  state = {
    body: "",
    tags: [],
    errors: [],
    tagsForm: false,
    loading: false
  }

  handleSubmit = e => {
    e.preventDefault();
    let {body, tags} = this.state;
    
    if(!body) {
      return this.setState({errors: ['Please add some text.']})
    }

    if(tags.length) {
      tags = tags.map(({value}) => value)
    }

    this.setState({loading: true}, () => {
      this.props.onSubmit({body, tags}).then(res => {
        this.setState({body: "", tags: [], loading: false})
      })
    })
  }

  handleSelect = (value, actionMeta) => {
    this.setState({tags: value});
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value, errors: []})
  }

  toggleTagsForm = () => {
    this.setState(({tagsForm}) => ({tagsForm: !tagsForm}))
  }

  render() {
    let {classes, user} = this.props;
    let {errors, body, tags} = this.state;

    return (
      <Card className={classes.form}>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup invalid={errors.length} className={classes.formGroup}>
              <Input 
              rows={1}
              value={body}
              type='textarea'
              name='body'
              className={classes.textInput}
              placeholder={`Share what's on your mind ${user.firstName}`}
              onChange={this.handleChange}/>

              <FormFeedback className={classNames(
                'show-feedback', classes.formfeedback
              )} >{errors[0]}</FormFeedback>
            </FormGroup>

            <Collapse isOpen={this.state.tagsForm}>
              <FormGroup className={classes.formGroup}>
                <CreatableSelect 
                value={tags}
                isMulti isClearable
                styles={selectStyles}
                theme={theme => ({...theme, props: this.props.theme})}
                components={{DropdownIndicator: null}}
                placeholder="Add some tags for this post..."
                onChange={this.handleSelect} />
              </FormGroup>
            </Collapse>

            <div className="d-flex justify-content-between">
              <Button 
              color="link"
              className={classes.tagButton}
              onClick={this.toggleTagsForm}># Add tags</Button>

              <FormButton loading={this.state.loading}>Post</FormButton>
            </div>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default injectStyles(styles)(PostForm)
