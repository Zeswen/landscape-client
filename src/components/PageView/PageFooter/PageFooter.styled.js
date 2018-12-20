import styled from 'styled-components';

import hexToRgb from '../../../utils/HexToRgb';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    auto: ''
};

const FILTER_EFFECTS = (percent) => ({
    none: '',
    contrast: `contrast(${percent}%)`,
    grayscale: `grayscale(${percent}%)`,
    invert: `invert(${percent}%)`,
    saturate: `saturate(${percent}%)`,
    sepia: `sepia(${percent}%)`
})

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: ${({ backgroundColor, backgroundAlpha }) => `rgba(${hexToRgb(backgroundColor)}, ${backgroundAlpha})`};
    flex-direction: ${({ isReverse }) => (isReverse ? 'column-reverse' : 'column')};
    align-items: ${({ position }) => POSITION_TO_FLEX[position]};
    height: ${({ height }) => height}px;
    padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) => paddingH}px;
    opacity: ${({ opacity }) => opacity};
    filter: ${({ filter, filterPercentage }) => FILTER_EFFECTS(filterPercentage)[filter]};
    transition: all 0.2s ease;
`;

export const CopyrightMessage = styled.p`
    font-weight: lighter;
    font-size: ${({ copyrightFontSize }) => copyrightFontSize}px;
    font-family: ${({ copyrightFontFamily }) => copyrightFontFamily};
    color: ${({ copyrightColor }) => copyrightColor};
    color: ${({ copyrightColor, copyrightAlpha }) => `rgba(${hexToRgb(copyrightColor)}, ${copyrightAlpha})`};
    transition: all 0.2s ease;
`;

export const OwnerMessage = styled.p`
    margin: 0;
    font-size: ${({ ownerFontSize }) => ownerFontSize}px;
    font-family: ${({ ownerFontFamily }) => ownerFontFamily};
    color: ${({ ownerColor }) => ownerColor};
    color: ${({ ownerColor, ownerAlpha }) => `rgba(${hexToRgb(ownerColor)}, ${ownerAlpha})`};
    transition: all 0.2s ease;
`;

export const Social = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: auto;
    transition: all 0.2s ease;
`;

export const SocialImg = styled.img`
    margin: 1rem 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
    }
`;
