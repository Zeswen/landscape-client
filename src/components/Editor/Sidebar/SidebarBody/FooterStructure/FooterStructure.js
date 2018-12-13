import React from 'react';

import { StyledTab, StyledTabContent, StyledTitle, ContentSection } from './FooterStructure.styled' 

export default class FooterStructure extends React.Component {
    
    handleOnBackgroundColorClick = (event) => {
        const backgroundColor = event.target.value;
        this.props.handleOnChange('backgroundColor', backgroundColor);
    }
    
    handleOnPositionChange = (event) => {
        const position = event.target.value;
        this.props.handleOnChange('position', position);
    }

    handleOnHeightChange = (event) => {
        const height = event.target.value;
        this.props.handleOnChange('height', height);
    }
    
    handleOnPaddingVChange = (event) => {
        const paddingV = event.target.value;
        this.props.handleOnChange('paddingV', paddingV);
    }

    handleOnPaddingHChange = (event) => {
        const paddingH = event.target.value;
        this.props.handleOnChange('paddingH', paddingH);
    }

    handleOnReverseChange = (event) => {
        const isReverse = event.target.checked;
        this.props.handleOnChange('isReverse', isReverse);
    }

    handleOnCopyrightChange = (event) => {
        const hasCopyright = event.target.checked;
        this.props.handleOnChange('hasCopyright', hasCopyright);
    }
    
    handleOnCopyrightFontFamilyChange = (event) => {
        const copyrightFontFamily = event.target.value;
        this.props.handleOnChange('copyrightFontFamily', copyrightFontFamily);
    }

    handleOnCopyrightFontSizeChange = (event) => {
        const copyrightFontSize = event.target.value;
        this.props.handleOnChange('copyrightFontSize', copyrightFontSize);
    }

    handleOnCopyrightColorClick = (event) => {
        const copyrightColor = event.target.value;
        this.props.handleOnChange('copyrightColor', copyrightColor);
    }
    
    handleOnOwnerFontFamilyChange = (event) => {
        const ownerFontFamily = event.target.value;
        this.props.handleOnChange('ownerFontFamily', ownerFontFamily);
    }

    handleOnOwnerFontSizeChange = (event) => {
        const ownerFontSize = event.target.value;
        this.props.handleOnChange('ownerFontSize', ownerFontSize);
    }

    handleOnOwnerColorClick = (event) => {
        const ownerColor = event.target.value;
        this.props.handleOnChange('ownerColor', ownerColor);
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
                            <h4>Height</h4>
                            <input 
                                type="number" 
                                min="60"
                                max="180"
                                value={innerStructure.height} 
                                onChange={this.handleOnHeightChange}
                            />
                        </ContentSection>
                        <ContentSection>
                            <h4>Padding</h4>
                            <div>
                                <input 
                                    type="number" 
                                    min="0"
                                    max="32"
                                    value={innerStructure.paddingV} 
                                    onChange={this.handleOnPaddingVChange}
                                />
                                <input 
                                    type="number" 
                                    min="0"
                                    max="32"
                                    value={innerStructure.paddingH} 
                                    onChange={this.handleOnPaddingHChange}
                                    />
                            </div>
                        </ContentSection>
                        <ContentSection>
                            <h4>Reverse</h4>
                            <input 
                                type="checkbox" 
                                checked={innerStructure.isReverse} 
                                onChange={this.handleOnReverseChange}
                            />
                        </ContentSection>
                        <StyledTitle>Copyright</StyledTitle>
                        <ContentSection>
                            <h4>Copyright</h4>
                            <input 
                                type="checkbox" 
                                checked={innerStructure.hasCopyright} 
                                onChange={this.handleOnCopyrightChange}
                            />
                        </ContentSection>
                        {(innerStructure.hasCopyright) && (
                            <React.Fragment>
                                <ContentSection>
                                    <h4>Font Family</h4>
                                    <select onChange={this.handleOnCopyrightFontFamilyChange} value={innerStructure.copyrightFontFamily}>
                                        {fonts.map(font => (
                                            <option key={font} value={font}>{font}</option>
                                        ))}
                                    </select>
                                </ContentSection>
                                <ContentSection>
                                    <h4>Font Size</h4>
                                    <input 
                                        type="number" 
                                        min="6"
                                        max="18"
                                        value={innerStructure.copyrightFontSize} 
                                        onChange={this.handleOnCopyrightFontSizeChange}
                                    />
                                </ContentSection>
                                <ContentSection>
                                    <h4>Color</h4>
                                    <input type="color" onChange={this.handleOnCopyrightColorClick} value={innerStructure.copyrightColor} />
                                </ContentSection>
                            </React.Fragment>
                        )}
                        <StyledTitle>Owner</StyledTitle>
                        <ContentSection>
                            <h4>Font Family</h4>
                            <select onChange={this.handleOnOwnerFontFamilyChange} value={innerStructure.ownerFontFamily}>
                                {fonts.map(font => (
                                    <option key={font} value={font}>{font}</option>
                                ))}
                            </select>
                        </ContentSection>
                        <ContentSection>
                            <h4>Font Size</h4>
                            <input 
                                type="number" 
                                min="6"
                                max="48"
                                value={innerStructure.ownerFontSize} 
                                onChange={this.handleOnOwnerFontSizeChange}
                            />
                        </ContentSection>
                        <ContentSection>
                            <h4>Color</h4>
                            <input type="color" onChange={this.handleOnOwnerColorClick} value={innerStructure.ownerColor} />
                        </ContentSection>
                    </StyledTabContent>
                    
                )}
            </React.Fragment>
        );
    }
}  