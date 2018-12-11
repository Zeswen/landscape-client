import React from 'react';

import { HeaderContainer, LogoText, LogoImage } from './PageHeader.styled'

const PageHeader = props => (
    <HeaderContainer
        position={props.position}
        backgroundColor={props.backgroundColor}
        fontSize={props.fontSize}
        fontFamily={props.fontFamily}
        color={props.color}
        isReverse={props.isReverse}
        hasBurguerMenu={props.hasBurguerMenu}
    >
        {props.imageUrl
            ? <LogoImage src={props.imageUrl} alt="logo" />
            : <LogoText>{props.title}</LogoText>
        }
        {props.hasBurguerMenu && <span>|||</span>}
    </HeaderContainer>
);

export default PageHeader;
