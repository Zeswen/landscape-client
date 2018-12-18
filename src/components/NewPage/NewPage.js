import React, { Component } from 'react';
import PageService from '../../utils/PageService';

import {
  NewPageModalContainer,
  NewPageModalBox,
  StyledH1,
  NewPageModalClose,
  CloseImage,
  NewPageModalForm,
  NewPageInput,
  SubmitButton
} from './NewPage.styled';

export default class NewPage extends Component {
  state = {
    title: '',
    id: ''
  };

  service = new PageService();

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      id: this.props.user._id
    }));
  }

  closeNewPageModal = e => {
    e.preventDefault();
    this.props.history.push({ pathname: '/' });
  };

  handleNewPageChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleNewPageSubmit = e => {
    e.preventDefault();
    const { title, id } = this.state;

    this.service.newPage(title, id).then(() => {
      this.props.getUpdatedPages();
      this.props.history.push({ pathname: '/' });
    });
  };

  render() {
    return (
      <NewPageModalContainer>
        <NewPageModalBox>
          <NewPageModalClose onClick={this.closeNewPageModal}>
            <CloseImage src={require('../../images/close.png')} alt="close button"/>
          </NewPageModalClose>
            <StyledH1>New Page</StyledH1>
          <NewPageModalForm onSubmit={this.handleNewPageSubmit}>
            <NewPageInput
              placeholder="Title"
              type="text"
              name="title"
              onChange={this.handleNewPageChange}
            />
            <p>{this.props.message}</p>
            <SubmitButton type="submit" onSubmit={this.handleNewPageSubmit}>
              Submit
            </SubmitButton>
          </NewPageModalForm>
        </NewPageModalBox>
      </NewPageModalContainer>
    );
  }
}
