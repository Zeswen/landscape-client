import React from 'react';

import { FooterContainer, CopyrightMessage, OwnerMessage, Social, SocialImg } from './PageFooter.styled'

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
        <Social>
        {props.social && props.social.map(elem => (
            <React.Fragment key={elem.name}>
                {(elem.name === 'Facebook') && elem.active && <SocialImg src='https://res.cloudinary.com/dk4iqakns/image/upload/v1544715901/landscape/fb_icon_325x325.png' alt='Facebook' onClick={()=> window.open(elem.url, "_blank")} />}
                {(elem.name === 'Twitter') && elem.active && <SocialImg src='https://res.cloudinary.com/dk4iqakns/image/upload/v1544715911/landscape/zRim1x6M.jpg' alt='Twitter' onClick={()=> window.open(elem.url, "_blank")} />}
                {(elem.name === 'Instagram') && elem.active && <SocialImg src='https://res.cloudinary.com/dk4iqakns/image/upload/v1544715906/landscape/unnamed.png' alt='Instagram' onClick={()=> window.open(elem.url, "_blank")} />}
            </React.Fragment>
        ))}
        </Social>
    </FooterContainer>
);

export default PageFooter;
