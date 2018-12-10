import styled from 'styled-components';

export const NewPageModal = styled.div`
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

export const NewPageModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
`;

export const NewPageModalClose = styled.button`
    align-self: flex-end;

    &:hover {
        cursor: pointer;
    }
`;

export const NewPageModalForm = styled.form`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NewPageInput = styled.input`
    margin-bottom: 0.5rem;
`;