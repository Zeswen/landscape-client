import React from 'react';
import Transition from "react-transition-group/Transition";

import {
  StyledTab,
  StyledTabContent,
  StyledTitle,
  ContentSection,
  AddSectionButton
} from './SectionStructure.styled';

export default class SectionStructure extends React.Component {
  contentRef = null;

  setContentRef = element => {
    this.contentRef = element;
  };

  handleOnBackgroundColorClick = event => {
    const backgroundColor = event.target.value;
    this.props.handleOnChange(
      'backgroundColor',
      backgroundColor,
      this.props.innerStructure.id
    );
  };

  handleOnPositionChange = event => {
    const position = event.target.value;
    this.props.handleOnChange(
      'position',
      position,
      this.props.innerStructure.id
    );
  };

  handleOnTextAlignChange = event => {
    const textAlign = event.target.value;
    this.props.handleOnChange(
      'textAlign',
      textAlign,
      this.props.innerStructure.id
    );
  };

  handleOnHeightChange = event => {
    const height = event.target.value;
    this.props.handleOnChange('height', height, this.props.innerStructure.id);
  };

  handleOnPaddingVChange = event => {
    const paddingV = event.target.value;
    this.props.handleOnChange(
      'paddingV',
      paddingV,
      this.props.innerStructure.id
    );
  };

  handleOnPaddingHChange = event => {
    const paddingH = event.target.value;
    this.props.handleOnChange(
      'paddingH',
      paddingH,
      this.props.innerStructure.id
    );
  };

  handleOnReverseChange = event => {
    const isReverse = event.target.checked;
    this.props.handleOnChange(
      'isReverse',
      isReverse,
      this.props.innerStructure.id
    );
  };

  handleOnTitleFontFamilyChange = event => {
    const titleFontFamily = event.target.value;
    this.props.handleOnChange(
      'titleFontFamily',
      titleFontFamily,
      this.props.innerStructure.id
    );
  };

  handleOnTitleFontSizeChange = event => {
    const titleFontSize = event.target.value;
    this.props.handleOnChange(
      'titleFontSize',
      titleFontSize,
      this.props.innerStructure.id
    );
  };

  handleOnTitleColorClick = event => {
    const titleColor = event.target.value;
    this.props.handleOnChange(
      'titleColor',
      titleColor,
      this.props.innerStructure.id
    );
  };

  handleOnDescriptionFontFamilyChange = event => {
    const descriptionFontFamily = event.target.value;
    this.props.handleOnChange(
      'descriptionFontFamily',
      descriptionFontFamily,
      this.props.innerStructure.id
    );
  };

  handleOnDescriptionFontSizeChange = event => {
    const descriptionFontSize = event.target.value;
    this.props.handleOnChange(
      'descriptionFontSize',
      descriptionFontSize,
      this.props.innerStructure.id
    );
  };

  handleOnDescriptionColorClick = event => {
    const descriptionColor = event.target.value;
    this.props.handleOnChange(
      'descriptionColor',
      descriptionColor,
      this.props.innerStructure.id
    );
  };

  render() {
    const {
      onClickTab,
      title,
      fonts,
      isOpen,
      innerStructure,
      handleAddSection
    } = this.props;
    return (
      <React.Fragment>
        <StyledTab isOpen={isOpen} onClick={() => onClickTab(title)}>{title}</StyledTab>
        <Transition
          in={isOpen}
          timeout={0}
          mountOnEnter
        >
          {(transitionState) => (
          <StyledTabContent
          ref={this.setContentRef}
          scrollHeight={this.contentRef && this.contentRef.scrollHeight}
          transitionState={transitionState}
          >
            <StyledTitle>Container</StyledTitle>
            <ContentSection>
              <h4>BG Color</h4>
              <input
                type="color"
                onChange={this.handleOnBackgroundColorClick}
                value={innerStructure.backgroundColor}
              />
            </ContentSection>
            <ContentSection>
              <h4>Position</h4>
              <select
                onChange={this.handleOnPositionChange}
                value={innerStructure.position}
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="center">Center</option>
              </select>
            </ContentSection>
            <ContentSection>
              <h4>Height</h4>
              <input
                type="number"
                min="100"
                max="400"
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
              <h4>Text Align</h4>
              <select
                onChange={this.handleOnTextAlignChange}
                value={innerStructure.textAlign}
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="center">Center</option>
                <option value="justify">Justify</option>
              </select>
            </ContentSection>
            <ContentSection>
              <h4>Reverse</h4>
              <input
                type="checkbox"
                checked={innerStructure.isReverse}
                onChange={this.handleOnReverseChange}
              />
            </ContentSection>
            <StyledTitle>Title</StyledTitle>
            <ContentSection>
              <h4>Font Family</h4>
              <select
                onChange={this.handleOnTitleFontFamilyChange}
                value={innerStructure.titleFontFamily}
              >
                {fonts.map(font => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </ContentSection>
            <ContentSection>
              <h4>Font Size</h4>
              <input
                type="number"
                min="16"
                max="48"
                value={innerStructure.titleFontSize}
                onChange={this.handleOnTitleFontSizeChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Color</h4>
              <input
                type="color"
                onChange={this.handleOnTitleColorClick}
                value={innerStructure.titleColor}
              />
            </ContentSection>
            <StyledTitle>Description</StyledTitle>
            <ContentSection>
              <h4>Font Family</h4>
              <select
                onChange={this.handleOnDescriptionFontFamilyChange}
                value={innerStructure.descriptionFontFamily}
              >
                {fonts.map(font => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </ContentSection>
            <ContentSection>
              <h4>Font Size</h4>
              <input
                type="number"
                min="16"
                max="48"
                value={innerStructure.descriptionFontSize}
                onChange={this.handleOnDescriptionFontSizeChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Color</h4>
              <input
                type="color"
                onChange={this.handleOnDescriptionColorClick}
                value={innerStructure.descriptionColor}
              />
            </ContentSection>
            <AddSectionButton
              onClick={() => handleAddSection(this.props.innerStructure.id)}
            >
              Clone Section
            </AddSectionButton>
          </StyledTabContent>
        )}
        </Transition>
      </React.Fragment>
    );
  }
}
