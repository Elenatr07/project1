import update from "react-addons-update";
import { SEND_MESSAGE, SUCCESS_LOAD_MESSAGES } from "../Actions/messageActions";
import { ADD_CHAT } from "../Actions/chatActions"
import { UpdateTwoTone } from "@material-ui/icons";

const initialStore = {
    // chats: {
    //     1: { title: "Chat 1", messageList: [] },
    //     2: { title: "Chat 2", messageList: [] },
    //     3: { title: "Chat 3", messageList: [] },
    //     4: { title: "Chat 4", messageList: [] },
    //     5: { title: "Chat 5", messageList: [] },
    //  },
    messages: {
        // 1: { text: " Hello I am Bot!", author: "'Bot'" },
        // 2: { text: " What can I help you?", author: "'Bot'" },
        // 3: { text: "Hello", author: "'Bot'" },
        // 4: { text: "What do you want to talk about?", author: "'Bot'" }
    },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const addMessageId = Object.keys(store.messages).length + 1
            return update(store, {
                messages: {
                    $merge: {
                        [addMessageId]: {
                            text: action.text,
                            author: action.author,
                        }
                    }
                },
                chats: {
                    [action.chatId]: { messageList: { $merge: { [Object.keys(store.chats[action.chatId].messageList).length]: addMessageId } } }
                },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title, messageList: []
                        }
                    }
                },
            });
        }

        case SUCCESS_LOAD_MESSAGES: {
            console.log(action.payload)
            return update(store, {
                messages: { $push: action.payload }
            });
        }
        default:
            return store;
    }
}
