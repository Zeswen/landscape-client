import React, { Component } from 'react';
import { merge } from 'lodash';

import { BASE_SECTION } from '../../utils/baseDesigns';
import PageService from '../../utils/PageService';

import {
  EditorWrapper,
  EditorContainer,
  ViewContainer,
  SidebarContainer
} from './Editor.styled';
import PageView from '../PageView';
import Sidebar from '../Sidebar';

class Editor extends Component {
  state = {
    structure: {
      header: {},
      sections: [],
      footer: {}
    },
    colors: [],
    fonts: []
  };

  message = null;

  service = new PageService();

  componentDidMount() {
    this.service.getPage(this.props.match.params.id)
        .then(page => {
            this.setState({ ...page });
        });
  }

  getDeepStateChange = (structurePiece, fieldName, value) => ({
    structure: {
        [structurePiece]: structurePiece === 'sections'
            ?  [...value]
            : {
                [fieldName]: value,
            }
    }
  }) 

  handleDeepStateChange = (deepStateChange) => {
    this.setState(prevState => ({
        ...merge(prevState, deepStateChange)
    }));
  }

  handleChangeHeader = (fieldName, value) => {
    const deepStateChange = this.getDeepStateChange('header', fieldName, value);
    this.handleDeepStateChange(deepStateChange);
  };

  handleChangeSection = (fieldName, value, id) => {
    const { sections } = this.state.structure;
    const newSections = sections.map(section => ({
        ...section,
        ...(section.id === id ? { [fieldName]: value } : {}),
    }));
    
    const deepStateChange = this.getDeepStateChange('sections', null, newSections);
    this.handleDeepStateChange(deepStateChange);
  };

  handleAddSection = sectionId => {
    const { sections } = this.state.structure;
    const newSection = {
        ...(sectionId 
            ? sections.find(elem => elem.id === sectionId) 
            : BASE_SECTION
        ),
        id: sections.length,
    };

    const deepStateChange = this.getDeepStateChange('sections', null, [...sections, newSection]);
    this.handleDeepStateChange(deepStateChange);
  };

  handleChangeFooter = (fieldName, value) => {
    const deepStateChange = this.getDeepStateChange('footer', fieldName, value);
    this.handleDeepStateChange(deepStateChange);
  };

  handleFooterSocialChange = (name, fieldName, value) => {
    const { social } = this.state.structure.footer;
    const newSocial = social.map(socialElem => ({
            ...socialElem,
            ...(socialElem.name === name ? { [fieldName]: value } : {}),
    }));

    const deepStateChange = this.getDeepStateChange('footer', 'social', newSocial);
    this.handleDeepStateChange(deepStateChange);
  };

  handleSave = () => {
    return this.service.updatePage({ ...this.state }).then(res => res.message);
  };

  render() {
    return (
      <EditorWrapper>
        <EditorContainer>
          <ViewContainer>
            <PageView structure={this.state.structure} />
          </ViewContainer>
        </EditorContainer>
        <SidebarContainer>
          <Sidebar 
            handleSave={this.handleSave}
            structure={this.state.structure}
            handleChangeHeader={this.handleChangeHeader}
            handleChangeSection={this.handleChangeSection}
            handleAddSection={this.handleAddSection}
            handleChangeFooter={this.handleChangeFooter}
            handleFooterSocialChange={this.handleFooterSocialChange}
            fonts={this.state.fonts}
            colors={this.state.colors}
          />
        </SidebarContainer>
      </EditorWrapper>
    );
  }
}

export default Editor;
