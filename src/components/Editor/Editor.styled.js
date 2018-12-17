import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  0% { opacity: 0 }
  100% { opacity: 100 }
`;

const saturation = keyframes`
  0% {filter: grayscale(0%)}
  100% {filter: grayscale(75%)}
`;


export const EditorWrapper = styled.div`
  display: flex;


  &:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${require('../../images/landscape2.jpg')}) no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(75%);
  animation: ${saturation} 1s ease-in-out;
  }
`;

export const EditorContainer = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadein} 0.5s ease-in-out;
  background:  radial-gradient(rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.5));
`;

export const ViewContainer = styled.div`
  width: 375px;
  height: 667px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: #fff;
  animation: ${fadein} 0.5s ease-in-out;
`;

export const SidebarContainer = styled.div`
  width: 25%;
  min-width: 300px;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  color: rgb(40, 80, 90);
  filter: grayscale(25%);
  background: linear-gradient(rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.5)), url(${require('../../images/landscape2.jpg')}) no-repeat ;
  background-position: center right;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  animation: ${fadein} 0.25s ease-in-out;
  transition: all 0.15s ease-in-out;
`;