import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export default class Message extends React.Component {
    habdleDelete = () => { }

    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })

    };

    render() {
        const message = this.props.message.name === 'Me' ?
            <Chip
                deleteIcon={<DoneIcon />}
                color="primary"
                onDelete={this.habdleDelete}
                label={this.props.message.text} /> :
            <Chip
                deleteIcon={<DoneIcon />}
                color="secondary"
                className='bot'
                label={this.props.message.text}
                onDelete={this.habdleDelete} />

        //let { sender, text } = this.props;
        return (
            <div className="message-block">
                {message}
            </div>
        )
    }
}
