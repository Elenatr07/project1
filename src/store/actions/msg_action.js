export let SEND_MSG = '@@message/SEND';
export let sendMessage = (chatId, text, author) => ({
    type: SEND_MSG,
    chatId,
    text,
    author

});