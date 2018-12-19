import React, { Component } from 'react'

import PageView from '../PageView';
import PagesService from '../../utils/PageService';

export default class Page extends Component {
    state = {
        structure: {
            header: {},
            sections: [],
            footer: {}
        },
        fonts: []
    };

    service = new PagesService();

    componentDidMount() {
        this.service.getPage(this.props.match.params.url)
            .then(page => {
                this.setState({ ...page });
            });
    }

    componentDidUpdate() {
        this.service.getPage(this.props.match.params.url)
            .then(page => {
                this.setState({ ...page });
            })
    }

    render() {
        return (
            <PageView structure={this.state.structure} />
        )
    }
}
