import React, { Component } from "react";
import './style.css';
import ListItem from '../../component/component.jsx';

export default class TestContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { names } = this.props;
        let listItem = names.map(el => <ListItem nameProp={el} />)
        return (
            <ul>
                {listItem}
            </ul>
        )
    }
}