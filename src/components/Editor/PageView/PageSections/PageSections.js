import React from 'react';

import { SectionContainer, TitleText, DescriptionText } from './PageSections.styled'

const PageSections = props => (
    <React.Fragment>
        {props && Object.values(props).map((section, index) => (
            <SectionContainer
            key={index}
            backgroundColor={section.backgroundColor}
            position={section.position}
            height={section.height}
            textAlign={section.textAlign}
            isReverse={section.isReverse}
            >
                <TitleText
                titleFontFamily={section.titleFontFamily}
                titleFontSize={section.titleFontSize}
                titleColor={section.titleColor}
                >
                    {section.title}
                </TitleText>
                <DescriptionText
                descriptionFontFamily={section.descriptionFontFamily}
                descriptionFontSize={section.descriptionFontSize}
                descriptionColor={section.descriptionColor}
                >
                    {section.description}
                </DescriptionText>
            </SectionContainer>
        ))}

    </React.Fragment>
)

export default PageSections;
