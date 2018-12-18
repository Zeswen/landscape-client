import React from 'react';

import { PageContainer } from './PageView.styled';

import PageHeader from './PageHeader';
import PageSections from './PageSections';
import PageFooter from './PageFooter';

const PageView = ({ structure }) => (
    //@TODO: Fontweight on every component
    //@TODO: Responsive
    //@TODO: Images as background and desc

    <PageContainer>
        {structure.header && <PageHeader {...structure.header} />}
        {structure.sections && <PageSections {...structure.sections} />}
        {structure.footer && <PageFooter {...structure.footer} />}
    </PageContainer>
);

export default PageView;