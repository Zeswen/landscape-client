import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: overlay;
    padding-right: 17px;
    box-sizing: content-box;
    cursor: ns-resize;

    /* :hover {
        cursor: -webkit-grab;
    }

    :active {
        cursor: -webkit-grabbing;
    } */

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;