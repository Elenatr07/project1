import { SEND_MSG, sendMessage } from "../store/actions/msg_action.js";

export default store => next => action => {
    switch (action.type) {
        case SEND_MSG: {
            if (action.sender == 'Me') {
                setTimeout(() => {
                    let id = Object.keys(store.getState().msg_reducer.messages).length + 1;
                    return store.dispatch(
                        sendMessage(id, 'Bot', 'Some text...')
                    )
                }, 1000);

            }
        }
    }
    return next(action);
}
