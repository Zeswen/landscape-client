import React from 'react';
import Transition from "react-transition-group/Transition";

import {
  StyledTab,
  StyledTabContent,
  StyledTitle,
  ContentSection,
  SocialContentSection,
  SocialMedias,
  SocialMedia,
  SocialInput
} from './FooterStructure.styled';

export default class FooterStructure extends React.Component {
  contentRef = null;

  setContentRef = element => {
    this.contentRef = element;
  };

  handleOnBackgroundColorClick = event => {
    const backgroundColor = event.target.value;
    this.props.handleOnChange('backgroundColor', backgroundColor);
  };

  handleBackgroundAlphaChange = event => {
    const backgroundAlpha = event.target.value;
    this.props.handleOnChange("backgroundAlpha", backgroundAlpha);
  };

  handleOnPositionChange = event => {
    const position = event.target.value;
    this.props.handleOnChange('position', position);
  };

  handleOnHeightChange = event => {
    const height = event.target.value;
    this.props.handleOnChange('height', height);
  };

  handleOnPaddingVChange = event => {
    const paddingV = event.target.value;
    this.props.handleOnChange('paddingV', paddingV);
  };

  handleOnPaddingHChange = event => {
    const paddingH = event.target.value;
    this.props.handleOnChange('paddingH', paddingH);
  };

  handleOnOpacityChange = event => {
    const opacity = event.target.value;
    this.props.handleOnChange("opacity", opacity);
  };

  handleOnReverseChange = event => {
    const isReverse = event.target.checked;
    this.props.handleOnChange('isReverse', isReverse);
  };

  handleOnCopyrightChange = event => {
    const hasCopyright = event.target.checked;
    this.props.handleOnChange('hasCopyright', hasCopyright);
  };

  handleCopyrightTextChange = event => {
    const copyrightText = event.target.value;
    this.props.handleOnChange("copyrightText", copyrightText);
  };

  handleOnCopyrightFontFamilyChange = event => {
    const copyrightFontFamily = event.target.value;
    this.props.handleOnChange('copyrightFontFamily', copyrightFontFamily);
  };

  handleOnCopyrightFontSizeChange = event => {
    const copyrightFontSize = event.target.value;
    this.props.handleOnChange('copyrightFontSize', copyrightFontSize);
  };

  handleOnCopyrightColorClick = event => {
    const copyrightColor = event.target.value;
    this.props.handleOnChange('copyrightColor', copyrightColor);
  };

  handleCopyrightAlphaChange = event => {
    const copyrightAlpha = event.target.value;
    this.props.handleOnChange("copyrightAlpha", copyrightAlpha);
  };

  handleOwnerTextChange = event => {
    const ownerText = event.target.value;
    this.props.handleOnChange("ownerText", ownerText);
  };

  handleOnOwnerFontFamilyChange = event => {
    const ownerFontFamily = event.target.value;
    this.props.handleOnChange('ownerFontFamily', ownerFontFamily);
  };

  handleOnOwnerFontSizeChange = event => {
    const ownerFontSize = event.target.value;
    this.props.handleOnChange('ownerFontSize', ownerFontSize);
  };

  handleOnOwnerColorClick = event => {
    const ownerColor = event.target.value;
    this.props.handleOnChange('ownerColor', ownerColor);
  };

  handleOwnerAlphaChange = event => {
    const ownerAlpha = event.target.value;
    this.props.handleOnChange("ownerAlpha", ownerAlpha);
  };

  isSocialActive = event => {
    return typeof event === 'string'
      ? this.props.innerStructure.social &&
          this.props.innerStructure.social.find(e => e.name === event).active
      : this.props.innerStructure.social &&
          this.props.innerStructure.social.find(
            e => e.name === event.target.name
          ).active;
  };

  handleOnSocialActiveClick = event => {
    this.props.handleOnSocialChange(
      event.target.name,
      'active',
      !this.isSocialActive(event)
    );
  };

  handleOnSocialUrlChange = event => {
    const url = event.target.value;
    this.props.handleOnSocialChange(event.target.name, 'url', url);
  };

  render() {
    const { onClickTab, title, fonts, isOpen, innerStructure } = this.props;
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
                <option value="auto">Auto</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="center">Center</option>
              </select>
            </ContentSection>
            <ContentSection>
              <h4>Height</h4>
              <input
                type="number"
                min="80"
                max="160"
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
            {innerStructure.hasCopyright && (
              <React.Fragment>
                <ContentSection>
                  <h4>Text</h4>
                  <input type="text" onChange={this.handleCopyrightTextChange} value={innerStructure.copyrightText}/>
                </ContentSection>
                <ContentSection>
                  <h4>Font Family</h4>
                  <select
                    onChange={this.handleOnCopyrightFontFamilyChange}
                    value={innerStructure.copyrightFontFamily}
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
                    min="6"
                    max="18"
                    value={innerStructure.copyrightFontSize}
                    onChange={this.handleOnCopyrightFontSizeChange}
                  />
                </ContentSection>
                <ContentSection>
                  <h4>Color</h4>
                  <input
                    type="color"
                    onChange={this.handleOnCopyrightColorClick}
                    value={innerStructure.copyrightColor}
                  />
                </ContentSection>
                <ContentSection>
                  <h4>Alpha</h4>
                  <input
                    type="number"
                    min="0"
                    max="1"
                    step='0.1'
                    value={innerStructure.copyrightAlpha}
                    onChange={this.handleCopyrightAlphaChange}
                  />
                </ContentSection>
              </React.Fragment>
            )}
            <StyledTitle>Owner</StyledTitle>
            <ContentSection>
              <h4>Text</h4>
              <input type="text" onChange={this.handleOwnerTextChange} value={innerStructure.ownerText}/>
            </ContentSection>
            <ContentSection>
              <h4>Font Family</h4>
              <select
                onChange={this.handleOnOwnerFontFamilyChange}
                value={innerStructure.ownerFontFamily}
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
                min="6"
                max="32"
                value={innerStructure.ownerFontSize}
                onChange={this.handleOnOwnerFontSizeChange}
              />
            </ContentSection>
            <ContentSection>
              <h4>Color</h4>
              <input
                type="color"
                onChange={this.handleOnOwnerColorClick}
                value={innerStructure.ownerColor}
              />
            </ContentSection>
            <ContentSection>
                  <h4>Alpha</h4>
                  <input
                  type="number"
                  min="0"
                  max="1"
                  step='0.1'
                  value={innerStructure.ownerAlpha}
                  onChange={this.handleOwnerAlphaChange}
                />
              </ContentSection>
            <SocialContentSection>
              <SocialMedias>
                <SocialMedia
                  name="Facebook"
                  src="https://res.cloudinary.com/dk4iqakns/image/upload/v1544715901/landscape/fb_icon_325x325.png"
                  alt="Facebook"
                  isActive={this.isSocialActive}
                  onClick={this.handleOnSocialActiveClick}
                />
                <SocialMedia
                  name="Twitter"
                  src="https://res.cloudinary.com/dk4iqakns/image/upload/v1544715911/landscape/zRim1x6M.jpg"
                  alt="Twitter"
                  isActive={this.isSocialActive}
                  onClick={this.handleOnSocialActiveClick}
                />
                <SocialMedia
                  name="Instagram"
                  src="https://res.cloudinary.com/dk4iqakns/image/upload/v1544715906/landscape/unnamed.png"
                  alt="Instagram"
                  isActive={this.isSocialActive}
                  onClick={this.handleOnSocialActiveClick}
                />
              </SocialMedias>
              {innerStructure.social.map(
                (elem, i) =>
                  elem.active && (
                    <SocialInput
                      key={i}
                      value={elem.url}
                      name={elem.name}
                      onChange={this.handleOnSocialUrlChange}
                    />
                  )
              )}
            </SocialContentSection>
          </StyledTabContent>
        )}
        </Transition>
      </React.Fragment>
    );
  }
}
