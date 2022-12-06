import React, { Component } from 'react';
import Message from '../Message/Message.jsx';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/msg_action.js';
import { Button } from '@material-ui/core'


class MessageField extends Component {
    state = {
        text: '',
        answered: true
    };

    handleSend = () => {
        let { text } = this.state;
        let id = Object.keys(this.props.messages).length + 1;
        this.props.sendMessage(id, 'Me', text);
    };

    handleChange = evt => {
        if (evt.keyCode != 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend();
        }
    };

    componentDidUpdate() {
        if (!this.state.answered) this.sendMessage('I am BOT what can I help you?');
    }

    render() {
        let { messages } = this.props;
        let messageElements = Object.keys(messages).map((id) => (
            <Message key={id} text={messages[id].text} sender={messages[id].sender} />
        )
        );

        return <div>
            {messageElements}
            <input
                type="text"
                onChange={this.handleChange}
            />
            <Button variant="contained" color="primary"
                onClick={this.handleSend}
            >Send the message</Button>
        </div>
    }
}

const mapStateProps = ({ msg_reducer }) => ({
    messages: msg_reducer.messages
})

const mapDispatchProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateProps, mapDispatchProps)(MessageField);
