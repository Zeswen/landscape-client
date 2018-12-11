import styled from 'styled-components';

export const StyledTab = styled.div`
    height: 40px;
    border: 1px solid black;
    width: 100%;
`;

export const StyledTabContent = styled.div`
    padding: 0 0.5rem;
`;

export const ContentSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SelectedColorBox = styled.div`
    width: 5rem;
    height: 2rem;
    background-color: ${({ color }) => color};
    border: 1px solid black;
`;

export const ColorModalContainer = styled.dialog`
    display: ${({ open }) => open ? 'flex' : 'none' };
    justify-content: space-around;
    align-items: center;
`;

export const ColorBox = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${({ color }) => color};
    border: 1px solid black;
    margin: 0.25rem;
`;