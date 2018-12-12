import React from 'react';

import { StyledTab, StyledTabContent, StyledTitle, ContentSection } from './HeaderStructure.styled' 

export default class HeaderStructure extends React.Component {

    handleOnLogoChange = (event) => {
        const logo = event.target.files[0];
        this.props.handleOnChange('imgUrl', logo);
    }

    handleOnFontFamilyChange = (event) => {
        const fontFamily = event.target.value;
        this.props.handleOnChange('fontFamily', fontFamily);
    }

    handleOnFontSizeChange = (event) => {
        const fontSize = event.target.value;
        this.props.handleOnChange('fontSize', fontSize);
    }

    handleOnPositionChange = (event) => {
        const position = event.target.value;
        this.props.handleOnChange('position', position);
    }

    handleOnBurguerChange = (event) => {
        const hasMenu = event.target.checked;
        this.props.handleOnChange('hasMenu', hasMenu);
    }

    handleOnMenuSizeChange = (event) => {
        const menuSize = event.target.value;
        this.props.handleOnChange('menuSize', menuSize);
    }

    handleOnReverseChange = (event) => {
        const isReverse = event.target.checked;
        this.props.handleOnChange('isReverse', isReverse);
    }

    handleOnColorClick = (event) => {
        const color = event.target.value;
        this.props.handleOnChange('color', color);
    }

    handleOnBackgroundColorClick = (event) => {
        const backgroundColor = event.target.value;
        this.props.handleOnChange('backgroundColor', backgroundColor);
    }

    render() {
        const { onClickTab, title, fonts, isOpen, innerStructure } = this.props;

        return (
            <React.Fragment>
                <StyledTab 
                    onClick={() => onClickTab(title)}
                >
                    {title}
                </StyledTab>
                {isOpen && (
                    <StyledTabContent>
                        <StyledTitle>Container</StyledTitle>
                        <ContentSection>
                            <h4>Logo</h4>
                            <input type='file' onChange={this.handleOnLogoChange} disabled />
                        </ContentSection>
                        <ContentSection>
                            <h4>BG Color</h4>
                            <input type="color" onChange={this.handleOnBackgroundColorClick} value={innerStructure.backgroundColor} />
                        </ContentSection>
                        <ContentSection>
                            <h4>Position</h4>
                            <select onChange={this.handleOnPositionChange} value={innerStructure.position}>
                                {innerStructure.hasMenu
                                    ? (
                                        <option value="left">Aside</option>
                                    ) : (
                                        <React.Fragment>
                                            <option value="left">Left</option>
                                            <option value="right">Right</option>
                                        </React.Fragment>
                                    )
                                }
                                <option value="center">Center</option>
                            </select>
                        </ContentSection>
                        <ContentSection>
                            <h4>Menu</h4>
                            <input 
                                type="checkbox" 
                                checked={innerStructure.hasMenu} 
                                onChange={this.handleOnBurguerChange}
                            />
                        </ContentSection>
                        {(innerStructure.hasMenu || innerStructure.isReverse) && (
                            <ContentSection>
                                <h4>Menu Size</h4>
                                <input 
                                    type="number"
                                    min="32"
                                    max="96"
                                    value={innerStructure.menuSize}
                                    onChange={this.handleOnMenuSizeChange}
                                />
                            </ContentSection>
                        )}
                        {(innerStructure.hasMenu || innerStructure.isReverse) && (
                            <ContentSection>
                                <h4>Reverse</h4>
                                <input 
                                    type="checkbox" 
                                    checked={innerStructure.isReverse} 
                                    onChange={this.handleOnReverseChange}
                                />
                            </ContentSection>
                        )}
                        <StyledTitle>Title</StyledTitle>
                        <ContentSection>
                            <h4>Font Family</h4>
                            <select onChange={this.handleOnFontFamilyChange} value={innerStructure.fontFamily}>
                                {fonts.map(font => (
                                    <option key={font} value={font}>{font}</option>
                                ))}
                            </select>
                        </ContentSection>
                        <ContentSection>
                            <h4>Font Size</h4>
                            <input 
                                type="number" 
                                min="16"
                                max="48"
                                value={innerStructure.fontSize} 
                                onChange={this.handleOnFontSizeChange}
                            />
                        </ContentSection>
                        <ContentSection>
                            <h4>Color</h4>
                            <input type="color" onChange={this.handleOnColorClick} value={innerStructure.color} />
                        </ContentSection>
                    </StyledTabContent>
                )}
            </React.Fragment>
        );
    }
}  