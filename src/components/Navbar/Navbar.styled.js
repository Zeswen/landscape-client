import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingNav = styled.nav`
    margin: 0;
    padding: 0.5rem 2rem;
    background: rgba(234,229,254, 0.8);
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    width: 100vw;
    height: 85px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);

    &:hover {
        transition: all 0.25s ease;
    }
`;

export const Logo = styled.img`
    height: 80px;
    width: 200px;
    transition: all 0.25s ease;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
        transition: all 0.25s ease;        
    }

    &:active {
        filter: brightness(0.9);
        transition: all 0.25s ease;        
    }
`;

export const NewProjectButton = styled.button`
    outline: none;
    margin: 0 auto;
    padding: 15px 30px;
    border: none;
    border-radius: 40px;
    color: white;
    background: #19323c;
    transition: all 0.25s ease;

    &:hover {
        outline: none;
        background: rgb(40,80,90);
        cursor: pointer;
        transition: all 0.25s ease;        
    }
    
    &:active {
        outline: none;
        cursor: pointer;
        transition: all 0.15s ease;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4)  
    }

    &:focus {
        outline: none;
    }
`;

export const LogoText = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 1px 10px black;
`;

export const NavUl = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    list-style: none;
`;

export const NavLi = styled.li`
    margin: 0 0.5rem;
`;

export const NavLink = styled(Link)`
    color: #19323c;
    transition: all 0.25s ease;

    &:hover {
        color: rgb(40,80,90);
        text-decoration: none;
        transition: all 0.25s ease;
    }
`;