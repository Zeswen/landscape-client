import styled from 'styled-components';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

export const HeaderContainer = styled.div`
    padding: 0.5rem 1rem;
    height: 70px;
    display: flex;
    flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
    justify-content: ${({ hasBurguerMenu, position }) => hasBurguerMenu
        ? 'space-between'
        : POSITION_TO_FLEX[position]
    };
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize}px;
    font-family: ${({ fontFamily }) => fontFamily};
    color: ${({ color }) => color};

    ${({ hasBurguerMenu, position }) => (
        hasBurguerMenu && 
        position === 'center' && 
        `&::before {
            content: '';
        }`
    )};
`;

export const LogoText = styled.p`
    font-weight: bold;
`;

export const LogoImage = styled.img`
    height: 100%;
`;
