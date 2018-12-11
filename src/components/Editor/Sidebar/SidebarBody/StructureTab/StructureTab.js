import React from 'react';

import { StyledTab, StyledTabContent, ContentSection, SelectedColorBox, ColorModalContainer, ColorBox } from './StructureTab.styled' 

export default class StructureTab extends React.Component {
    state = {
        isColorModalOpen: false,
        isBackgroundColorModalOpen: false,
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
        const hasBurguerMenu = event.target.checked;
        this.props.handleOnChange('hasBurguerMenu', hasBurguerMenu);
    }

    handleOnReverseChange = (event) => {
        const isReverse = event.target.checked;
        this.props.handleOnChange('isReverse', isReverse);
    }

    handleOnColorClick = (color) => {
        this.props.handleOnChange('color', color);
    }

    handleOnBackgroundColorClick = (backgroundColor) => {
        this.props.handleOnChange('backgroundColor', backgroundColor);
    }

    handleOnColorBoxClick = () => {
        this.setState(prevState => ({
            isColorModalOpen: !prevState.isColorModalOpen,
            isBackgroundColorModalOpen: false,
        }));
    }

    handleOnBackgroundColorBoxClick = () => {
        this.setState(prevState => ({
            isBackgroundColorModalOpen: !prevState.isBackgroundColorModalOpen,
            isColorModalOpen: false,
        }));
    }

    render() {
        const { onClickTab, title, fonts, colors, isOpen, innerStructure } = this.props;

        return (
            <React.Fragment>
                <StyledTab 
                    onClick={() => onClickTab(title)}
                >
                    {title}
                </StyledTab>
                {isOpen && (
                    <StyledTabContent>
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
                            <SelectedColorBox color={innerStructure.color} onClick={this.handleOnColorBoxClick} />
                            <ColorModalContainer open={this.state.isColorModalOpen}>
                                <button onClick={this.handleOnColorBoxClick}>X</button>
                                {colors.map(color => (
                                    <ColorBox onClick={() => this.handleOnColorClick(color)} key={color} color={color} />
                                ))}
                            </ColorModalContainer>
                        </ContentSection>
                        <ContentSection>
                            <h4>BG Color</h4>
                            <SelectedColorBox color={innerStructure.backgroundColor} onClick={this.handleOnBackgroundColorBoxClick} />
                            <ColorModalContainer open={this.state.isBackgroundColorModalOpen}>
                                <button onClick={this.handleOnBackgroundColorBoxClick}>X</button>
                                {colors.map(color => (
                                    <ColorBox onClick={() => this.handleOnBackgroundColorClick(color)} key={color} color={color} />
                                ))}
                            </ColorModalContainer>
                        </ContentSection>
                        <ContentSection>
                            <h4>Position</h4>
                            <select onChange={this.handleOnPositionChange} value={innerStructure.position}>
                                {innerStructure.hasBurguerMenu
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
                            <h4>Burguer Menu</h4>
                            <input 
                                type="checkbox" 
                                checked={innerStructure.hasBurguerMenu} 
                                onChange={this.handleOnBurguerChange}
                            />
                        </ContentSection>
                        {(innerStructure.hasBurguerMenu || innerStructure.isReverse) && (
                            <ContentSection>
                                <h4>Reverse display</h4>
                                <input 
                                    type="checkbox" 
                                    checked={innerStructure.isReverse} 
                                    onChange={this.handleOnReverseChange}
                                />
                            </ContentSection>
                        )}
                    </StyledTabContent>
                )}
            </React.Fragment>
        );
    }
}  