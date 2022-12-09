import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

//import SendIcon from "material-ui/svg-icons/content/send"



export default class Message extends React.Component {
    static propTypes = {
        messages: PropTypes.object.isRequired,
        author: PropTypes.string.isRequired,
    };



    render() {
        return <div
            className="message"
            style={{
                alignSelf: this.props.author === "'Bot'" ?
                    "flex-start" : "flex-end",
                backgroundColor: this.props.author === "'Bot'" ?
                    "rgb(255, 255, 255)" : "rgb(210, 233, 243)"
            }}
        >
            <div>{this.props.text}</div>
            <div className="message-author">{this.props.author}</div>
        </div>
    }
}

