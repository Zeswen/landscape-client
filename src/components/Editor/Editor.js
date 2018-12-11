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
                    fonts={this.state.fonts}
                    colors={this.state.colors}
                    />
                </SidebarContainer>
            </EditorWrapper>
        );
    }
}

export default Editor;
