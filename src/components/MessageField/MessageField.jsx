import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField } from "@material-ui/core";
//import SendIcon from "material-ui/svg-icons/content/send";
import Message from '../Message/Message.jsx';
import { sendMessage } from "../../Actions/messageActions";
import Button from '@material-ui/core/Button';


class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.object.isRequired,
        chatId: PropTypes.number.isRequired,
    };

    state = {
        input: '',
    };


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUP = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.props.chatId, this.state.input, "'mr7282'")
        }
    };


    handleSendMessage = (chatId, text, author) => {
        if (this.state.input.length > 0 || author === "'robot'") {
            this.props.sendMessage(chatId, text, author);
        }

        if (author === "'mr7282'") {
            this.setState({ input: "" })
        }
    };

    render() {
        const { messages } = this.props;
        const { chats } = this.props;
        const messagesArr = chats[this.props.chatId].messageList;

        const messageElements = messagesArr.map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId].text}
                author={messages[messageId].author}
            />));

        return <div>
            <div key="messageElements" id="name" className="message-field">
                {messageElements}
            </div>
            <div key='textInput' style={{ width: '100%', display: 'flex' }} >
                <TextField
                    name="input"
                    fullWidth={true}
                    hintText="Введите сообщение"
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUP}
                />
                <Button onClick={() => this.handleSendMessage(this.props.chatId, this.state.input, "'mr7282'")}>
                    send message
                </Button>
            </div>

        </div>
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
    chats: messageReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
