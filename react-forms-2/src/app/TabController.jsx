import React, { Component } from 'react';

export class TabController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

        this.setActiveTab = this.setActiveTab.bind(this);
    }

    setActiveTab(newIndex) {
        this.setState({
            activeTab: newIndex
        });

    }

    render() {

        const tabSelection = this.props.children.map((item, index) => {
            const key = `tab-${index}`;
            const content = index === this.state.activeTab ?
                (<b>{item.props.headline}</b>) :
                (<i>{item.props.headline}</i>);

            return (
                <li key={key}>
                    <a href='#' onClick={() => this.setActiveTab(index)}>{content}</a>
                </li>
            );
        });

        return (
            <React.Fragment>
                <nav>
                    <ul>
                        {tabSelection}
                    </ul>
                </nav>
                <div>{this.props.children[this.state.activeTab]}</div>
            </React.Fragment>
        );
    }

}
