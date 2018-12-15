import React, { Component } from 'react';

import { HeaderContainer, SaveButton } from './SidebarHeader.styled';

class SidebarHeader extends Component {
  state = {
    message: null
  };

  handleSaveButton = () => {
    this.props
      .handleSave()
      .then(res => {
        this.setState(
          prevState => ({
            ...prevState,
            message: res
          }),
          () => this.handleMessageTimeout()
        );
      })
      .catch(e => console.log(e));
  };

  handleMessageTimeout = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        message: null
      }));
    }, 2500);
  };

  render() {
    return (
      <HeaderContainer>
        <SaveButton onClick={this.handleSaveButton}>Save</SaveButton>
        {this.state.message !== null && <p>{this.state.message}</p>}
      </HeaderContainer>
    );
  }
}

export default SidebarHeader;
