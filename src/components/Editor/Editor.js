import React, { Component } from 'react';
import { merge } from 'lodash';

import { BASE_SECTION } from '../../utils/baseDesigns';
import PageService from '../../utils/PageService';

import { FontsContext, StructureContext } from '../Context';

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
    fonts: []
  };

  message = null;

  autoSave = false;

  service = new PageService();

  //@TODO: Reducer functions. https://redux.js.org/basics/reducers
  //@TODO: Dispatcher. 

  componentDidMount() {
    this.service.getPage(this.props.match.params.url)
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
    this.autoSave && this.handleSave()
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
    return this.service.updatePage({ ...this.state })
      .then(res => res.message);
  };

  handleAutoSave = () => {
    this.autoSave = !this.autoSave;
  }

  render() {
    console.log(this.autoSave)

    return (
      <EditorWrapper>
        <EditorContainer>
          <ViewContainer>
            <PageView structure={this.state.structure} />
          </ViewContainer>
        </EditorContainer>
        <SidebarContainer>
          <FontsContext.Provider value={this.state.fonts}>
            <StructureContext.Provider value={this.state.structure}>
                  <Sidebar 
                    autoSave={this.autoSave}
                    handleAutoSave={this.handleAutoSave}
                    handleSave={this.handleSave}
                    handleChangeHeader={this.handleChangeHeader}
                    handleChangeSection={this.handleChangeSection}
                    handleAddSection={this.handleAddSection}
                    handleChangeFooter={this.handleChangeFooter}
                    handleFooterSocialChange={this.handleFooterSocialChange}
                    colors={this.state.colors}
                  />
            </StructureContext.Provider>
          </FontsContext.Provider>
        </SidebarContainer>
      </EditorWrapper>
    );
  }
}

export default Editor;
