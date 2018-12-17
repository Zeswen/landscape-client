import styled from 'styled-components';

import HeightTransitionStyles from '../../utils/HeightTransitionStyles';

export const StyledTab = styled.div`
    transition: background 0.15s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    background: ${({ isOpen }) => isOpen ? 'rgba(255, 255, 255, 0.6)' : 'rgba(200, 200, 200, 0.4)'};
    width: 100%;
    cursor: pointer;

    &:hover {
        transition: background 0.15s ease-in-out;
        background: rgba(255, 255, 255, 0.6);
    }
`;

export const StyledTabContent = styled.div`
    padding: 0 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    background: rgba(255, 255, 255, 0.6);
    height: ${({ transitionState, scrollHeight })=> HeightTransitionStyles[transitionState](scrollHeight)};
    transition: height 100ms linear; 
    overflow: hidden;
`;

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 24px;
`

export const ContentSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;