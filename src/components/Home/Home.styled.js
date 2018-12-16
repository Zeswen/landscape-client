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

export const Logo = styled.h1`
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 1px 10px black;
`;