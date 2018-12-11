import React from 'react';

import { PageContainer } from './PageView.styled';

import PageHeader from './PageHeader';
import PageSections from './PageSections'

const PageView = ({ structure }) => (
    <PageContainer>
        {structure.header && <PageHeader {...structure.header} />}
        {structure.sections && <PageSections {...structure.sections} />}
        {/* {structure.footer && <PageFooter {...structure.footer} />} */}
    </PageContainer>
);

export default PageView;