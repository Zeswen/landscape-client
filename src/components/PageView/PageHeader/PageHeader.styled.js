import styled from 'styled-components';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

export const BurgerMenu = styled.img`
    width: ${({ menuSize }) => menuSize}px;
`;

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
    justify-content: ${({ hasMenu, position }) => hasMenu
        ? 'space-between'
        : POSITION_TO_FLEX[position]
    };
    height: ${({ height }) => height}px;
    padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) => paddingH}px;
    font-size: ${({ fontSize }) => fontSize}px;
    font-family: ${({ fontFamily }) => fontFamily};
    color: ${({ color }) => color};

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

