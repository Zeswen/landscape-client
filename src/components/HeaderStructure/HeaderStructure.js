import React from "react";
import Transition from "react-transition-group/Transition";

import {
  StyledTab,
  StyledTabContent,
  StyledTitle,
  ContentSection
} from "./HeaderStructure.styled";

export default class HeaderStructure extends React.Component {
  contentRef = null;

  setContentRef = element => {
    this.contentRef = element;
  };

  handleOnLogoChange = event => {
    const logo = event.target.files[0];
    this.props.handlePhotoUpload(logo)
      .then(imgUrl => this.props.handleOnChange("imgUrl", imgUrl.imgUrl))
  };

  handleLogoRemoval = () => {
    this.props.handleOnChange("imgUrl", null)
  };

  handleOnBackgroundColorClick = event => {
    const backgroundColor = event.target.value;
    this.props.handleOnChange("backgroundColor", backgroundColor);
  };

  handleBackgroundAlphaChange = event => {
    const backgroundAlpha = event.target.value;
    this.props.handleOnChange("backgroundAlpha", backgroundAlpha);
  };

  handleOnPositionChange = event => {
    const position = event.target.value;
    this.props.handleOnChange("position", position);
  };

  handleOnHeightChange = event => {
    const height = event.target.value;
    this.props.handleOnChange("height", height);
  };

  handleOnPaddingVChange = event => {
    const paddingV = event.target.value;
    this.props.handleOnChange("paddingV", paddingV);
  };

  handleOnPaddingHChange = event => {
    const paddingH = event.target.value;
    this.props.handleOnChange("paddingH", paddingH);
  };

  handleOnOpacityChange = event => {
    const opacity = event.target.value;
    this.props.handleOnChange("opacity", opacity);
  };

  handleOnFilterChange = event => {
    const filter = event.target.value;
    this.props.handleOnChange("filter", filter);
  };

  handleOnFilterPercentageChange = event => {
    const filterPercentage = event.target.value;
    this.props.handleOnChange("filterPercentage", filterPercentage);
  };

  handleOnBurguerChange = event => {
    const hasMenu = event.target.checked;
    this.props.handleOnChange("hasMenu", hasMenu);
  };

  handleOnReverseChange = event => {
    const isReverse = event.target.checked;
    this.props.handleOnChange("isReverse", isReverse);
  };

  handleOnMenuSizeChange = event => {
    const menuSize = event.target.value;
    this.props.handleOnChange("menuSize", menuSize);
  };

  handleMenuBackgroundColor = event => {
    const menuBackgroundColor = event.target.value;
    this.props.handleOnChange("menuBackgroundColor", menuBackgroundColor);
  };

  handleMenuBackgroundAlpha = event => {
    const menuBackgroundAlpha = event.target.value;
    this.props.handleOnChange("menuBackgroundAlpha", menuBackgroundAlpha);
  };

  handleTitleChange = event => {
    const title = event.target.value;
    this.props.handleOnChange("title", title);
  };

  handleOnFontFamilyChange = event => {
    const fontFamily = event.target.value;
    this.props.handleOnChange("fontFamily", fontFamily);
  };

  handleOnFontSizeChange = event => {
    const fontSize = event.target.value;
    this.props.handleOnChange("fontSize", fontSize);
  };

  handleOnColorClick = event => {
    const color = event.target.value;
    this.props.handleOnChange("color", color);
  };

  handleAlphaChange = event => {
    const alpha = event.target.value;
    this.props.handleOnChange("alpha", alpha);
  };

  render() {
    const { onClickTab, title, fonts, isOpen, innerStructure } = this.props;

    return (
      <React.Fragment>
        <StyledTab isOpen={isOpen} onClick={() => onClickTab(title)}>
          {title}
        </StyledTab>
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
              <h4>BG Alpha</h4>
              <input
                type="number"
                min="0"
                max="1"
                step='0.1'
                value={innerStructure.backgroundAlpha}
                onChange={this.handleBackgroundAlphaChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Position</h4>
              <select
                onChange={this.handleOnPositionChange}
                value={innerStructure.position}
              >
                {innerStructure.hasMenu ? (
                  <option value="left">Aside</option>
                ) : (
                  <React.Fragment>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </React.Fragment>
                )}
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
              <h4>Opacity</h4>
              <input
                type="number"
                min="0"
                max="1"
                step='0.1'
                value={innerStructure.opacity}
                onChange={this.handleOnOpacityChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Filter</h4>
              <select 
              value={innerStructure.filter}
              onChange={this.handleOnFilterChange}
              >
                <option value="none">None</option>
                <option value="contrast">Contrast</option>
                <option value="grayscale">Grayscale</option>
                <option value="invert">Invert</option>
                <option value="saturate">Saturate</option>
                <option value="sepia">Sepia</option>
              </select>
            </ContentSection>
            {innerStructure.filter !== 'none' && 
            <ContentSection>
              <h4>Filter Percentage</h4>
              <input
                type="number"
                value={innerStructure.filterPercentage}
                onChange={this.handleOnFilterPercentageChange}
              />
            </ContentSection>}
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
                <h4>Reverse</h4>
                <input
                  type="checkbox"
                  checked={innerStructure.isReverse}
                  onChange={this.handleOnReverseChange}
                />
              </ContentSection>
            )}
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
              <h4>Menu BG Color</h4>
              <input
                type="color"
                value={innerStructure.menuBackgroundColor}
                onChange={this.handleMenuBackgroundColor}
              />
            </ContentSection>
            )}
            {(innerStructure.hasMenu || innerStructure.isReverse) && (
            <ContentSection>
              <h4>Menu BG Alpha</h4>
              <input
                type="Number"
                min="0"
                max="1"
                step='0.1'
                value={innerStructure.menuBackgroundAlpha}
                onChange={this.handleMenuBackgroundAlpha}
              />
            </ContentSection>
            )}
            <StyledTitle>Title</StyledTitle>
            <ContentSection>
              <h4>Logo</h4>
              <div>
                <input type="file" onChange={this.handleOnLogoChange} style={{width: '105px'}} />
                <button onClick={this.handleLogoRemoval}>Delete Logo</button>
              </div>
            </ContentSection>
            <ContentSection>
              <h4>Text</h4>
              <input type="text" maxLength="20" onChange={this.handleTitleChange} value={innerStructure.title}/>
            </ContentSection>
            <ContentSection>
              <h4>Font Family</h4>
              <select
                onChange={this.handleOnFontFamilyChange}
                value={innerStructure.fontFamily}
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
                value={innerStructure.fontSize}
                onChange={this.handleOnFontSizeChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Color</h4>
              <input
                type="color"
                onChange={this.handleOnColorClick}
                value={innerStructure.color}
              />
            </ContentSection>
            <ContentSection>
              <h4>Alpha</h4>
              <input
                type="number"
                min="0"
                max="1"
                step='0.1'
                value={innerStructure.alpha}
                onChange={this.handleAlphaChange}
              />
            </ContentSection>
          </StyledTabContent>
          )}
        </Transition>
      </React.Fragment>
    );
  }
}
