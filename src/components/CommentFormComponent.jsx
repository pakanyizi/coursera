import React, { Component } from 'react'
import {
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from 'reactstrap'

import { Control, LocalForm, Errors } from 'react-redux-form'

class CommentForm extends Component {
  state = {
    isModalOpen: false
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  // handleSubmit = values => {
  //   console.log(`Current state is: ${JSON.stringify(values)}`)
  //   alert(`Current state is: ${JSON.stringify(values)}`)
  // }

  handleSubmit = values => {
    this.toggleModal()
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    )
  }

  render() {
    const required = val => val && val.length
    const maxLength = len => val => !val || val.length <= len
    const minLength = len => val => val && val.length >= len
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Post Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col>
                  <Control.select
                    model=".rating"
                    name="rating"
                    id="rating"
                    md={12}
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                    md={12}
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button
          onClick={this.toggleModal}
          type="submit"
          value="submit"
          outline
          color="secondary"
        >
          Submit Comment
        </Button>
      </React.Fragment>
    )
  }
}

export default CommentForm
