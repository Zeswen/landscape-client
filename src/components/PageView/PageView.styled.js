import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: overlay;
    box-sizing: content-box;

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