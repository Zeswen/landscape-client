import React from 'react';
import HeaderStructure from './HeaderStructure';
import SectionStructure from './SectionStructure';

export default class SidebarBody extends React.Component {
    state = {
        openTab: null,
    }

    handleOnClickTab = (tabTitle) => {
        const newOpenTab = this.state.openTab === tabTitle
            ? null
            : tabTitle;

        this.setState({
            openTab: newOpenTab,
        })
    }

    render() {
        const { structure, fonts, handleChangeHeader, handleChangeSection, handleAddSection } = this.props;
        const { openTab } = this.state;
        return ( 
            <React.Fragment>
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
                    isOpen={openTab === `Section ${index+1}`}
                    onClickTab={this.handleOnClickTab} 
                    handleOnChange={handleChangeSection}
                    handleAddSection={handleAddSection}
                    title={`Section ${index+1}`} 
                    innerStructure={section}
                    fonts={fonts}
                />
            ))}
            <button onClick={handleAddSection}>Add Section</button>
        {structure.footer && (
            <HeaderStructure 
                isOpen={openTab === 'Footer'} 
                onClickTab={this.handleOnClickTab}
                // handleOnChange={handleChangeFooter}
                title="Footer" 
                innerStructure={structure.footer}
                fonts={fonts}
            />
        )}
        </React.Fragment>
        );
    }
}
