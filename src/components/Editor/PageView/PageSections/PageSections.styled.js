import styled from 'styled-components';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

export const SectionContainer = styled.div`
    padding: 0.5rem 1rem;
    height: 70px;
    display: flex;
    flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
    justify-content: ${({ hasMenu, position }) => hasMenu
        ? 'space-between'
        : POSITION_TO_FLEX[position]
    };
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
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

