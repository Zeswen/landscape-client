import  styled, {keyframes} from 'styled-components';

const fadein = keyframes`
    0% { opacity: 0 }
    100% { opacity: 100 }
`;

export const Card = styled.div`
    animation: ${fadein} 0.25s ease-in-out;
    align-self: flex-start;
    text-align: center;
    font-family: 'Ubuntu';  
`;

export const EditButton = styled.button`
    background: rgb(75, 85, 100);
    border: 1px solid rgb(40, 80, 90);
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%;
    color: white;

    &:hover {
        cursor: pointer;
        background: rgb(50, 60, 75)
    }
`;