import React, { Component } from "react";
import Message from "../Message/Message.jsx";

export default class MessageField extends Component {
    state = {
        messages: [
            { sender: 'Bot', text: 'Hello' },
            { sender: 'Bot', text: 'How a you?' },
        ],
        text: '',
        answered: true
    };

    handleSend = () => {
        let { text } = this.state;
        this.sendMessage(text, 'Me');
    };

    sendMessage = (text, sender) => {
        let { messages } = this.state;
        this.setState(
            { messages: [...messages, { text, sender }], text: '' }
        );
        if (sender == 'Me') {
            this.setState({ answered: false });
        } else {
            this.setState({ answered: true });
        };
    }

    handleChange = evt => {
        if (evt.keyCode != 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend();
        }
    };

    componentDidUpdate() {
        // setTimeout(() => {
        // this.sendMessage();

        //     if (!this.state.answered) { 

        //     }
        // }, 500);
        // }
        if (!this.state.answered) this.sendMessage('I am bot what can I help you?');
    }
    render() {
        let { messages } = this.state;
        let messageElement = messages.map((message, index) => (
            <Message key={index} text={message.text} />
        ));
        return <div>
            {messageElement}
            <input
                type="text" onChange={this.handleChange} />
            <button onClick={this.handleSend}>Send the message</button>
        </div>
    }
}