import React, { Component } from 'react';

import PageService from '../../utils/PageService';

import { EditorWrapper, EditorContainer, ViewContainer, SidebarContainer } from './Editor.styled';
import PageView from './PageView';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarBody from './Sidebar/SidebarBody';

class Editor extends Component {
    state = {
        structure: {
            header: {},
            sections: [],
            footer: {}
        },
        colors: [],
        fonts: []
    }

    message = null;

    service = new PageService();

    handleChangeHeader = (fieldName, value) => {
        this.setState(prevState => ({
            ...prevState,
            structure: {
                ...prevState.structure,
                header: {
                ...prevState.structure.header,
                [fieldName]: value
                }
            }
        }));
    }

    handleChangeSection = (fieldName, value, id) => {
        let sections = [...this.state.structure.sections]
        let section = sections.find(elem => elem.id === id);

        sections[sections.indexOf(section)] = {
            ...section,
            [fieldName]: value
        }

        this.setState(prevState => ({
            ...prevState,
            structure: {
                ...prevState.structure,
                sections: sections
            }
        }));
    }

    handleAddSection = (id) => {
        let section = this.state.structure.sections.find(elem => elem.id === id);

        let newSection = (section === undefined)
        ? {...this.state.structure.sections[this.state.structure.sections.length - 1]}
        : {...this.state.structure.sections[this.state.structure.sections.indexOf(section)]}

        newSection.id++;

        this.setState(prevState => ({
            ...prevState,
            structure: {
                ...prevState.structure,
                sections: [
                    ...prevState.structure.sections,
                    newSection
                ]
            }
        }))
    }

    handleSave = () => {
        return this.service.updatePage({ ...this.state })
            .then(res => res.message)
    }

    componentDidMount() {
        this.service.getPage(this.props.match.params.id)
            .then(page => {
                this.setState(prevState => ({
                    ...prevState,
                    ...page
                }));
            })
    }

    render() {
        return (
            <EditorWrapper>
                <EditorContainer>
                    <ViewContainer>
                        <PageView structure={this.state.structure} />
                    </ViewContainer>
                </EditorContainer>
                <SidebarContainer>
                    <SidebarHeader handleSave={this.handleSave} />
                    <SidebarBody 
                    structure={this.state.structure} 
                    handleChangeHeader={this.handleChangeHeader}
                    handleChangeSection={this.handleChangeSection}
                    handleAddSection={this.handleAddSection}
                    fonts={this.state.fonts}
                    colors={this.state.colors}
                    />
                </SidebarContainer>
            </EditorWrapper>
        );
    }
}

export default Editor;
