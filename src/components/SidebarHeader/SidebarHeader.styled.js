import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: flex-start;
`;

export const SaveButton = styled.button`
    font-size: 1.75rem;
    outline: none;
    padding: 15px 30px;
    height: 100%;
    width: 100%;
    border: none;
    color: white;
    background: #3D9970;
    transition: all 0.25s ease;

    &:hover {
        cursor: pointer;
        outline: none;
        background: #3Dc170;
        transition: all 0.25s ease;
    }
`;