import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    background: url(${require('../../images/landscape2.jpg')}) no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding-top: 8rem;
`;
