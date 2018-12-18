import styled from 'styled-components';

import HeightTransitionStyles from '../../utils/HeightTransitionStyles';

export const StyledTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500 ;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    background: ${({ isOpen }) => isOpen ? 'rgba(255, 255, 255, 0.6)' : 'rgba(200, 200, 200, 0.4)'};
    width: 100%;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.6);
        transition: all 0.15s ease-in-out;
    }
`;

export const StyledTabContent = styled.div`
    padding: 0 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    height: ${({ transitionState, scrollHeight }) => HeightTransitionStyles[transitionState](scrollHeight)};
    transition: height 250ms ease-in; 
    overflow: overlay;
    background: rgba(255, 255, 255, 0.6);

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
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

export const SocialContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
    /* align-items: center; */
`;

export const SocialMedias = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
`;

export const SocialMedia = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    filter: ${({ name, isActive }) => (isActive(name) === true ? 0 : 'grayscale(100%)')};

    &:hover {
        cursor: pointer;
    }
`;

export const SocialInput = styled.input`
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.8);
    border-radius: 10px;
    padding: 0.25rem;
    color: rgba(0, 0, 0, 0.9);
    transition: all 0.25s;

    &:focus {
    border: 1px solid rgba(100, 100, 100, 0.8);
    color: rgba(0, 0, 0, 1);
    transition: all 0.15s;
    }
`;