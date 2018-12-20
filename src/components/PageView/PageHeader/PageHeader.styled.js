import styled from 'styled-components';

import hexToRgb from '../../../utils/HexToRgb';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

const FILTER_EFFECTS = (percent) => ({
    none: '',
    contrast: `contrast(${percent}%)`,
    grayscale: `grayscale(${percent}%)`,
    invert: `invert(${percent}%)`,
    saturate: `saturate(${percent}%)`,
    sepia: `sepia(${percent}%)`
})

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ backgroundColor, backgroundAlpha }) => `rgba(${hexToRgb(backgroundColor)}, ${backgroundAlpha})`};
    flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
    justify-content: ${({ hasMenu, position }) => hasMenu
        ? 'space-between'
        : POSITION_TO_FLEX[position]
    };
    height: ${({ height }) => height}px;
    padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) => paddingH}px;
    opacity: ${({ opacity }) => opacity};
    filter: ${({ filter, filterPercentage }) => FILTER_EFFECTS(filterPercentage)[filter]};
    font-size: ${({ fontSize }) => fontSize}px;
    font-family: ${({ fontFamily }) => fontFamily};
    color: ${({ color, alpha }) => `rgba(${hexToRgb(color)}, ${alpha})`};
    transition: all 0.2s ease;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    ${({ hasMenu, position }) => (
        hasMenu && 
        position === 'center' && 
        `&::before {
            content: '';
        }`
    )};
    
`;

export const LogoText = styled.p`
    font-weight: bold;
    margin: 0;
`;

export const LogoImage = styled.img`
    height: 100%;
`;


export const BurgerMenu = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: ${({ isMenuVisible }) => isMenuVisible ? '45%' : '0px' };
    transform: ${({ isMenuVisible }) => isMenuVisible ? 'translateX(0)' : 'translateX(150px)' };
    visibility: ${({ isMenuVisible }) => isMenuVisible ? 'visible' : 'hidden' };
    overflow: ${({ isMenuVisible }) => isMenuVisible ? 'auto' : 'hidden' };
    opacity: ${({ isMenuVisible }) => isMenuVisible ? '100' : '0' };
    height: ${({ viewHeight }) => viewHeight + 'px' };
    background-color: ${({ menuBackgroundColor, menuBackgroundAlpha }) => `rgba(${hexToRgb(menuBackgroundColor)}, ${menuBackgroundAlpha})`};
    padding: ${({ isMenuVisible }) => isMenuVisible ? ' 1.15rem 0.75rem' : '0' };
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    text-align: right;
    list-style: none;
    transition: all 0.2s ease;
    transition: padding 0;
    transition: width 0;


    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    > img {
        width: 20px;

        &:hover {
            cursor: pointer;
            filter: invert(25%);
            transition: filter 0.15s linear;
        }
    }

    > li {
        text-transform: capitalize;
        padding: 1rem 0;
        font-size: 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    }
`;

export const BurgerMenuImg = styled.img`
    width: ${({ menuSize }) => menuSize}px;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
    }
`;


