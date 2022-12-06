import React, { Component } from 'react';
import Message from '../Message/Message.jsx';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/msg_action.js';
import { Button, Paper, IconButton, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/SendRounded'


class MessageField extends Component {
    state = {
        input: '',
        messages: []
    };

    handleSend = (value) => {
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, { name: 'Me', text: value }]
        }))
        this.setState({ input: '' })

        // let { text } = this.state;
        // let id = Object.keys(this.props.messages).length + 1;
        //this.props.sendMessage(id, 'Me', text);
    };

    handleClick = (value) => {
        if (this.state.input !== '') {
            this.handleSend(value)
        }
    }

    handleKeyUp = (evt) => {
        if (this.state.input !== '') {
            if (evt.reyCode === 13) {
                this.handleSend(this.state.input)
            }
        }
    }

    handleChange = evt => {
        this.setState({ input: evt.target.value });

    };

    componentDidUpdate(prevProps, prevState) {
        const currentMessage = this.state.messages
        const lastMessage = currentMessage[currentMessage.length - 1]
        if (prevState.messages.length < this.state.messages.length && lastMessage.name === 'Me') {
            setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    messages: [...this.state.messages, { name: 'Bot', text: 'I am Bot what can I help you?' }]
                }))
            }, 1000)
        }
    }

    render() {
        const Messages = this.state.messages.map((item, index) => <Message key={index} message={item} />)
        return (
            <section className="chat container">
                <div className="message-list">
                    {Messages}
                </div>
                <div className="chat-footer">
                    <TextField
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={this.state.input}
                        onChange={this.handleChange}
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)} />

                    <IconButton
                        color="primary"
                        onClick={() => this.handleClick(this.state.input)}>
                        <SendIcon />
                    </IconButton>
                </div>
            </section>
        )
    }
}

const mapStateProps = ({ msg_reducer }) => ({
    messages: msg_reducer.messages
})

const mapDispatchProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateProps, mapDispatchProps)(MessageField);
