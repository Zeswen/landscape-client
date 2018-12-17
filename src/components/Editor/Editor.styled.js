import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  0% { opacity: 0 }
  100% { opacity: 100 }
`;

const saturation = keyframes`
  0% {filter: grayscale(0%)}
  100% {filter: grayscale(100%)}
`;


export const EditorWrapper = styled.div`
  display: flex;


  &:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: url(${require('../../images/landscape2.jpg')}) no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${saturation} 0.25s ease-in-out;
  filter: grayscale(100%);
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
  overflow: auto;
  z-index: 1;
  background: white;
  animation: ${fadein} 0.25s ease-in-out;
`;