import styled from 'styled-components';

import hexToRgb from '../../../utils/HexToRgb';

const POSITION_TO_FLEX = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
};

export const SectionContainer = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    background: ${({ backgroundImg, backgroundColor, backgroundAlpha }) => backgroundImg ? `url(${backgroundImg})` : `rgba(${hexToRgb(backgroundColor)}, ${backgroundAlpha})`};
    background-size: cover;
    justify-content: ${({ position }) => POSITION_TO_FLEX[position]};
    height: ${({ height }) => height}px;
    padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) => paddingH}px;
    text-align: ${({ textAlign }) => textAlign};
    flex-direction: ${({ isReverse }) => (isReverse ? 'column-reverse' : 'column')};
    transition: all 0.2s ease;
`;

export const TitleText = styled.p`
    font-weight: bold;
    margin: 0;
    display: flex;
    font-size: ${({ titleFontSize }) => titleFontSize}px;
    font-family: ${({ titleFontFamily }) => titleFontFamily};
    color: ${({ titleColor, titleAlpha }) => `rgba(${hexToRgb(titleColor)}, ${titleAlpha})`};
    transition: all 0.2s ease;
`;

export const DescriptionText = styled.p`
    margin: 0;
    display: flex;
    font-size: ${({ descriptionFontSize }) => descriptionFontSize}px;
    font-family: ${({ descriptionFontFamily }) => descriptionFontFamily};
    color: ${({ descriptionColor, descriptionAlpha }) => `rgba(${hexToRgb(descriptionColor)}, ${descriptionAlpha})`};
    transition: all 0.2s ease;
`;
