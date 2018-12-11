import React from 'react';

import { SectionContainer } from './PageSections.styled'

const PageSections = props => (
    <React.Fragment>
        <SectionContainer
            position={props.position}
            backgroundColor={props.backgroundColor}
            fontSize={props.fontSize}
            fontFamily={props.fontFamily}
            color={props.color}
            isReverse={props.isReverse}
        >
        <p>Hola</p>
        </SectionContainer>
    </React.Fragment>
)

export default PageSections;
