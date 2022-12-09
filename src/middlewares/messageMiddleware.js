import { SEND_MESSAGE, sendMessage } from "../Actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === "'Elena'") {
                setTimeout(() => store.dispatch(sendMessage(action.chatId, "I am still in development and can't help you!", "'Bot'")), 1000);
            }
            if (action.author === "'Bot'") {

            }
    }
    return next(action)
}