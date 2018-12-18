import styled from 'styled-components';

export const AddSectionButton = styled.button`
    height: 60px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    font-weight: 500;
    font-size: 1.5rem;
    background: rgba(200, 200, 200, 0.4);
    color: rgb(40, 80, 90);
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
        background: rgba(161, 212, 253, 0.6);
        transition: all 0.15s ease-in-out;
        outline: none;
    }

    &:focus {
        outline: none;       
    }

    &:active {
        outline: none;       
    }
`;