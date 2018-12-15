import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadein = keyframes`
    0% { opacity: 0 }
`;

export const AuthModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 100;
    animation: ${fadein} 0.25s ease-in-out;
`;

export const AuthModalBox = styled.div`
    height: 50vh;
    width: 20vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
`;

export const AuthModalClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    &:hover {
        cursor: pointer;
    }
`;

export const AuthModalForm = styled.form`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AuthInput = styled.input`
    margin-bottom: 0.5rem;
`;