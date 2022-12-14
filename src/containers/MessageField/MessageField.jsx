import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import Message from "../../components/Message";
import { sendMessage, loadMessages } from "../../Actions/messageActions";
import "./style.css";


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

    componentDidMount() {
        this.props.loadMessages(this.props.chatId);

    }

    handleKeyUP = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.props.chatId, this.state.input, "'Elena'")
        }
    };


    handleSendMessage = (chatId, text, author) => {
        if (this.state.input.length > 0 || author === "'Bot'") {
            this.props.sendMessage(chatId, text, author);
        }

        if (author === "'Elena'") {
            this.setState({ input: "" })
        }
    };

    render() {
        const { messages } = this.props;
        //const { chats } = this.props;
        //const messagesArr = chats[this.props.chatId].messageList;

        let messageElements = Object.keys(messages).map((messageId) => (
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
                    hintText="Enter you message"
                    style={{ fontSize: '16px' }}
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUP}
                />
                <FloatingActionButton

                    onClick={() => this.handleSendMessage(this.props.chatId, this.state.input, "'Elena'")}>
                    <SendIcon
                    />
                </FloatingActionButton>
            </div>

        </div>
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
    chats: messageReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);