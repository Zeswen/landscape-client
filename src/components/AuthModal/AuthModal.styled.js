import styled from 'styled-components';
import { keyframes } from 'styled-components';

const LdsDualRingAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const fadein = keyframes`
    0% { opacity: 0 }
    100% { opacity: 100 }
`;


export const AuthModalContainer = styled.div`
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

export const LdsDualRing = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;

    &::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff black #fff black;
    animation: ${LdsDualRingAnimation} 1.2s linear infinite;
    }
`;

export const AuthModalBox = styled.div`
    height: 50vh;
    width: 20vw;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(40,80,90, 0.5);

`;

export const StyledH1 = styled.h1`
    font-size: 3rem;
    color: rgb(40,80,90);
`;

export const AuthModalClose = styled.button`
    position: absolute;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-top: none;
    border-right: none;
    background: rgb(40,80,90);
    color: rgb(25, 25, 25);
    top: 0;
    right: 0;
    padding: 0.25rem 1rem;
    transition: all 0.15s ease-in-out;

    &:hover {
        cursor: pointer;
        background: rgb(60,100,110);
        transition: all 0.15s ease-in-out;
    }
`;

export const CloseImage = styled.img`
    width: 15px;
    height: 15px;
    filter: invert(100%);
`;

export const AuthModalForm = styled.form`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const AuthInput = styled.input`
    font-family: 'Roboto';
    outline: none;
    font-size: 1.25rem;
    border-width: 0 0 1px;
    line-height: 26px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: solid 1px #e1e1e1;
    transition: border-bottom .3s,border-color .3s,border-width .3s,border .3s ease-in-out;
    line-height: 1;
    color: rgb(50, 50, 50);
    transition: all 0.25s ease-in-out; 

    &:focus {
        border-bottom: solid 1px rgb(40,80,90);
        transition: all 0.25s ease-in-out; 
    }
`;

export const SubmitButton = styled.button`
    font-size: 1.25rem;
    padding: 0.5rem 3rem;
    background: white;
    color: rgb(40,80,90);
    border: 1px solid rgb(40,80,90);
    border-radius: 25px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    transition: all 0.25s ease-in-out;

    &:hover {
        background: rgb(40,80,90);
        color: white;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
`;