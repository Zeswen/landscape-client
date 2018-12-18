import React, { Component } from 'react';

import { HeaderContainer, AutoSaveButton, SaveButton } from './SidebarHeader.styled';

class SidebarHeader extends Component {
  state = {
    message: null
  };

  handleSaveButton = () => {
    this.props.handleSave()
      .then(res => {
        this.setState(
          prevState => ({
            ...prevState,
            message: res,
            autoSave: false
          }),
          () => this.handleMessageTimeout()
        );
      })
      .catch(e => console.log(e));
  };

  handleAutoSaveButton = () => {
    this.setState(prevState => ({
      ...prevState,
      autoSave: !this.state.autoSave
    }))
    this.props.handleAutoSave();
  }

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
        <SaveButton autoSave={this.state.autoSave} message={this.state.message} onClick={this.handleSaveButton}>{this.state.autoSave ? '' : (this.state.message ? this.state.message : 'Save')}</SaveButton>
        <AutoSaveButton autoSave={this.state.autoSave} onClick={this.handleAutoSaveButton}/>
      </HeaderContainer>
    );
  }
}

export default SidebarHeader;
