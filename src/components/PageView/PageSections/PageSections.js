import React from 'react';

import { SectionContainer, TitleText, DescriptionText } from './PageSections.styled'

const PageSections = props => (
    <React.Fragment>
        {props && Object.values(props).map((section, index) => (
            <SectionContainer
            id={`section-${index+1}`}
            key={index}
            backgroundImg={section.backgroundImg}
            backgroundColor={section.backgroundColor}
            backgroundAlpha={section.backgroundAlpha}
            position={section.position}
            height={section.height}
            paddingV={section.paddingV}
            paddingH={section.paddingH}
            opacity={section.opacity}
            filter={section.filter}
            filterPercentage={section.filterPercentage}
            textAlign={section.textAlign}
            isReverse={section.isReverse}
            >
                <TitleText
                titleFontFamily={section.titleFontFamily}
                titleFontSize={section.titleFontSize}
                titleColor={section.titleColor}
                titleAlpha={section.titleAlpha}
                >
                    {section.title}
                </TitleText>
                <DescriptionText
                descriptionFontFamily={section.descriptionFontFamily}
                descriptionFontSize={section.descriptionFontSize}
                descriptionColor={section.descriptionColor}
                descriptionAlpha={section.descriptionAlpha}
                >
                    {section.description}
                </DescriptionText>
            </SectionContainer>
        ))}

    </React.Fragment>
)

export default PageSections;
