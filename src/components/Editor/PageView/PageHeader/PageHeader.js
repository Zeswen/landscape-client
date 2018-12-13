import React from 'react';

import { HeaderContainer, LogoText, LogoImage, BurgerMenu } from './PageHeader.styled'

const PageHeader = props => (
    //@TODO: Input on logo text. P on start, onclick input
    //@TODO: Logo image via cloudinary
    //@TODO: Functional burger menu
    //@TODO: Lis to sections on burger menu
    

    <HeaderContainer
        backgroundColor={props.backgroundColor}
        position={props.position}
        height={props.height}
        paddingV={props.paddingV}
        paddingH={props.paddingH}
        hasMenu={props.hasMenu}
        isReverse={props.isReverse}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        color={props.color}
    >
        {props.imgUrl
            ? <LogoImage src={props.imgUrl} alt="logo" />
            : <LogoText>{props.title}</LogoText>
        }
        {props.hasMenu && <BurgerMenu menuSize={props.menuSize} src={require('../../../../images/menu.png')} alt='burgerMenu' />}
    </HeaderContainer>
);

export default PageHeader;
