import React from 'react';

import { FooterContainer, CopyrightMessage, OwnerMessage } from './PageFooter.styled'

const PageFooter = props => (
    //@TODO: Social

    <FooterContainer
        backgroundColor={props.backgroundColor}
        position={props.position}
        height={props.height}
        paddingV={props.paddingV}
        paddingH={props.paddingH}
        isReverse={props.isReverse}
        hasCopyright={props.hasCopyright}
    >
        {props.hasCopyright && <CopyrightMessage
            copyrightFontFamily={props.copyrightFontFamily}
            copyrightFontSize={props.copyrightFontSize}
            copyrightColor={props.copyrightColor}
        >
        © 2018, Landscape.com, Inc. or its affiliates
        </CopyrightMessage>}
        {props.owner && <OwnerMessage
        ownerFontFamily={props.ownerFontFamily}
        ownerFontSize={props.ownerFontSize}
        ownerColor={props.ownerColor}
        >
            Made with love by {props.owner}
        </OwnerMessage>}
    </FooterContainer>
);

export default PageFooter;
