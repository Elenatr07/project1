import update from "react-addons-update";
import { SEND_MESSAGE } from "../Actions/messageActions";
import { ADD_CHAT } from "../Actions/chatActions"

const initialStore = {
    chats: {
        1: { title: "Chat 1", messageList: [1, 2] },
        2: { title: "Chat 2", messageList: [2] },
        3: { title: "Chat 3", messageList: [3] },
        4: { title: "Chat 4", messageList: [4] },
        5: { title: "Chat 4", messageList: [1] },
    },
    messages: {
        1: { text: " Hello I am Bot!", author: "'Bot'" },
        2: { text: " What can I help you?", author: "'Bot'" },
        3: { text: "Hello", author: "'Bot'" },
        4: { text: "What do you want to talk about?", author: "'Bot'" }
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
        default:
            return store;
    }
}