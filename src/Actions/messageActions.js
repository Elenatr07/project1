import { getJSON, RSAA } from "redux-api-middleware";

export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export let START_LOAD_MESSAGES = '@@message/START_LOAD_MESSAGES';
export let SUCCESS_LOAD_MESSAGES = '@@message/SUCCESS_LOAD_MESSAGESE';
export let ERR_LOAD_MESSAGES = '@@message/ERR_LOAD_MESSAGESE';

export const loadMessages = (chatId = 1) => ({
    [RSAA]: {
        endpoint: '/api/chat/' + chatId,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_LOAD_MESSAGES,
            {
                type: SUCCESS_LOAD_MESSAGES,
                payload: (action, state, res) => getJSON(res).then(json => json)
            },
            ERR_LOAD_MESSAGES
        ]
    }
})

export const sendMessage = (chatId, text, author) => ({
    type: SEND_MESSAGE,
    chatId,
    text,
    author,
});