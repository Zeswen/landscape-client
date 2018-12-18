import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    display: flex;
`;

export const AutoSaveButton = styled.button`
    height: 100%;
    width: ${({ autoSave }) => autoSave ? '100%' : '5%'};
    font-size: 1.75rem;
    outline: none;
    padding: 15px 30px;
    border: none;
    color: white;
    background: #008CBA;
    z-index: 1;
    box-shadow: ${({ autoSave }) => autoSave ? '' : '-5px 0 15px rgba(0, 0, 0, 0.2)' };
    transition: all 0.25s ease;

    &:hover {
        cursor: pointer;
        outline: none;
        background: rgb(0,160,206) ;
        transition: all 0.25s ease;
    }

    &:focus {
        outline: none;
    }

    &:active {
        outline: none;
    }


    ${({ autoSave }) => autoSave ? (
        `::after {
            content: 'AutoSave';
        }`
    ) : ''}
`;

export const SaveButton = styled.button`
    font-size: 1.75rem;
    outline: none;
    padding:${({ autoSave }) => autoSave ? '0px' : '15px 0 15px 60px'};
    height: 100%;
    width: ${({ autoSave }) => autoSave ? '0px' : '95%'};
    border: none;
    color: white;
    background: ${({ message, autoSave }) => autoSave ? '#008CBA' : (message ? '#3Dc170' : '#3D9970') };
    transition: all 0.25s ease;

    &:hover {
        cursor: pointer;
        outline: none;
        background: #3Dc170;
        transition: all 0.25s ease;
    }

    &:focus {
        outline: none;
    }

    &:active {
        outline: none;
    }
`;