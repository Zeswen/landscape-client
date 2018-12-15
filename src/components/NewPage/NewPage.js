import React, { Component } from 'react';
import PageService from '../../utils/PageService';

import {
  NewPageModal,
  NewPageModalBox,
  NewPageModalClose,
  NewPageModalForm,
  NewPageInput
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
      <NewPageModal>
        <NewPageModalBox>
          <NewPageModalClose onClick={this.closeNewPageModal}>
            X
          </NewPageModalClose>
          <NewPageModalForm onSubmit={this.handleNewPageSubmit}>
            <h1>New Page</h1>
            <label>Title</label>
            <NewPageInput
              type="text"
              name="title"
              onChange={this.handleNewPageChange}
            />
            <p>{this.props.message}</p>
            <button type="submit" onSubmit={this.handleNewPageSubmit}>
              Submit
            </button>
          </NewPageModalForm>
        </NewPageModalBox>
      </NewPageModal>
    );
  }
}
