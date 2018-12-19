import React from 'react';

import HeaderStructure from '../HeaderStructure';
import SectionStructure from '../SectionStructure';
import FooterStructure from '../FooterStructure';

import { SidebarBodyWrapper, AddSectionButton } from './SidebarBody.styled';

import HocContext from '../HocContext';

export default class SidebarBody extends React.Component {
  state = {
    openTab: null
  };

  handleOnClickTab = tabTitle => {
    const newOpenTab = this.state.openTab === tabTitle ? null : tabTitle;

    this.setState({
      openTab: newOpenTab
    });
  };

  render() {
    const {
      handleChangeHeader,
      handleChangeSection,
      handleAddSection,
      handleChangeFooter,
      handleFooterSocialChange
    } = this.props;
    
    const { openTab } = this.state;

    return (
      <SidebarBodyWrapper>
          <HocContext>
          {({header}, fonts) => (
          <HeaderStructure
            innerStructure={header}
            fonts={fonts}
            isOpen={openTab === 'Header'}
            onClickTab={this.handleOnClickTab}
            handleOnChange={handleChangeHeader}
            title="Header"
          />
          )}
          </HocContext>
        <HocContext>
          {({sections}, fonts) => (
            (sections || []).map((section, index) => (
            <SectionStructure
              key={index}
              innerStructure={section}
              fonts={fonts}
              isOpen={openTab === `Section ${index + 1}`}
              onClickTab={this.handleOnClickTab}
              handleOnChange={handleChangeSection}
              title={`Section ${index + 1}`}
            />
          )))}
        </HocContext>
        <AddSectionButton onClick={() => handleAddSection(null)}>Add New Section</AddSectionButton>
        <HocContext>
        { ({footer}, fonts) => (
          <FooterStructure
            innerStructure={footer}
            fonts={fonts}
            isOpen={openTab === 'Footer'}
            onClickTab={this.handleOnClickTab}
            handleOnChange={handleChangeFooter}
            handleOnSocialChange={handleFooterSocialChange}
            title="Footer"
          />
        )}
        </HocContext>
      </SidebarBodyWrapper>
    );
  }
}
