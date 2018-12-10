import styled from 'styled-components';

export const LoginModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const LoginModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
`;

export const LoginModalClose = styled.button`
    align-self: flex-end;

    &:hover {
        cursor: pointer;
    }
`;

export const LoginModalForm = styled.form`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginInput = styled.input`
    margin-bottom: 0.5rem;
`;