import React from 'react';
import StructureTab from './StructureTab';

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
        const { structure, fonts, colors, handleChangeHeader } = this.props;
        const { openTab } = this.state;

        return ( 
            <React.Fragment>
            {structure.header && (
                <StructureTab 
                    title="Header" 
                    isOpen={openTab === 'Header'} 
                    onClickTab={this.handleOnClickTab}
                    innerStructure={structure.header}
                    fonts={fonts}
                    colors={colors}
                    handleOnChange={handleChangeHeader}
                />
            )}
            {(structure.sections || []).map((section, index) => (
                <StructureTab 
                    key={index} 
                    title={`Section ${index}`} 
                    isOpen={openTab === `Section ${index}`}
                    onClickTab={this.handleOnClickTab} 
                />
            ))}
        {structure.footer && (
            <StructureTab 
                title="Footer" 
                isOpen={openTab === 'Footer'} 
                onClickTab={this.handleOnClickTab} 
            />
        )}
        </React.Fragment>
        );
    }
}