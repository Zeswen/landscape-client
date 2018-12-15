import styled from 'styled-components';

export const StyledTab = styled.div`
    height: 40px;
    border: 1px solid black;
    width: 100%;
    cursor: pointer;
`;

export const StyledTabContent = styled.div`
    padding: 0 0.5rem;
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
    margin-bottom: 0.25rem;
    color: rgba(0, 0, 0, 0.9);
    transition: all 0.25s;

    &:focus {
    border: 1px solid rgba(100, 100, 100, 0.8);
    color: rgba(0, 0, 0, 1);
    transition: all 0.15s;
    }
`;