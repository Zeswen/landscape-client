import styled from 'styled-components';

export const EditorWrapper = styled.div`
  display: flex;
`;

export const EditorContainer = styled.div`
  width: 75%;
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewContainer = styled.div`
  width: 375px;
  height: 667px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
`;

export const SidebarContainer = styled.div`
  width: 25%;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
`;