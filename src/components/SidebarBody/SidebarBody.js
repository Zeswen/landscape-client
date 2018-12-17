import React from 'react';

import HeaderStructure from '../HeaderStructure';
import SectionStructure from '../SectionStructure';
import FooterStructure from '../FooterStructure';

import { SidebarBodyWrapper, AddSectionButton } from './SidebarBody.styled';

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
      structure,
      fonts,
      handleChangeHeader,
      handleChangeSection,
      handleAddSection,
      handleChangeFooter,
      handleFooterSocialChange
    } = this.props;
    
    const { openTab } = this.state;

    return (
      <SidebarBodyWrapper>
        {structure.header && (
          <HeaderStructure
            isOpen={openTab === 'Header'}
            onClickTab={this.handleOnClickTab}
            handleOnChange={handleChangeHeader}
            title="Header"
            innerStructure={structure.header}
            fonts={fonts}
          />
        )}
        {(structure.sections || []).map((section, index) => (
          <SectionStructure
            key={index}
            isOpen={openTab === `Section ${index + 1}`}
            onClickTab={this.handleOnClickTab}
            handleOnChange={handleChangeSection}
            handleAddSection={handleAddSection}
            title={`Section ${index + 1}`}
            innerStructure={section}
            fonts={fonts}
          />
        ))}
        <AddSectionButton onClick={() => handleAddSection(null)}>+</AddSectionButton>
        {structure.footer && (
          <FooterStructure
            isOpen={openTab === 'Footer'}
            onClickTab={this.handleOnClickTab}
            handleOnChange={handleChangeFooter}
            handleOnSocialChange={handleFooterSocialChange}
            title="Footer"
            innerStructure={structure.footer}
            fonts={fonts}
          />
        )}
      </SidebarBodyWrapper>
    );
  }
}
