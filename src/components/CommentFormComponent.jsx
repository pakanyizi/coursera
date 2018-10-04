import React, { Component } from 'react'
import {
  Label,
  Input,
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

  render() {
    const required = val => val && val.length
    const maxLength = len => val => !val || val.length <= len
    const minLength = len => val => val && val.length >= len
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Post Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleLogin}>
              <Row className="form-group">
                <Label htmlFor="exampleSelect" md={12}>
                  Select
                </Label>
                <Col>
                  <Input type="select" name="select" id="exampleSelect" md={12}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="username" md={12}>
                  Username
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    placeholder="User Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
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
                <Label htmlFor="message" md={12}>
                  Comment
                </Label>
                <Col>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
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
