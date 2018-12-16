import styled from 'styled-components';

export const DashboardWrapper = styled.div`
    background:  linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${require('../../images/landscape2.jpg')}) no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding-top: 8rem;
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;
    padding-top: 8rem;
`;

export const EditButton = styled.button`
    background: rgb(40,80,90);
`;