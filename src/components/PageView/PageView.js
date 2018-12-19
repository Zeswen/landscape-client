import React, { Component } from 'react';

import { PageContainer } from './PageView.styled';

import PageHeader from './PageHeader';
import PageSections from './PageSections';
import PageFooter from './PageFooter';

export default class PageView extends Component {
    contentRef = null;

    setContentRef = element => {
      this.contentRef = element;
    };
    
    render() {
        const { structure } = this.props
        return (
            //@TODO: Fontweight on every component
            //@TODO: Responsive
            //@TODO: Images as background and desc
            <PageContainer ref={this.setContentRef}>
                {structure.header && <PageHeader {...structure.header} structure={structure} viewHeight={this.contentRef && this.contentRef.scrollHeight} />}
                {structure.sections && <PageSections {...structure.sections} />}
                {structure.footer && <PageFooter {...structure.footer} />}
            </PageContainer>
        )
    }
}
