import styled from 'styled-components';

const POSITION_TO_FLEX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

export const FooterContainer = styled.div`

    display: flex;
    justify-content: center;
    text-align: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    flex-direction: ${({ isReverse }) => (isReverse ? 'column-reverse' : 'column')};
    align-items: ${({ position }) => POSITION_TO_FLEX[position]};
    height: ${({ height }) => height}px;
    padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) => paddingH}px;
`;

export const CopyrightMessage = styled.p`
    font-weight: lighter;
    font-size: ${({ copyrightFontSize }) => copyrightFontSize}px;
    font-family: ${({ copyrightFontFamily }) => copyrightFontFamily};
    color: ${({ copyrightColor }) => copyrightColor};
`;

export const OwnerMessage = styled.p`
    margin: 0;
    font-size: ${({ ownerFontSize }) => ownerFontSize}px;
    font-family: ${({ ownerFontFamily }) => ownerFontFamily};
    color: ${({ ownerColor }) => ownerColor};
`;

