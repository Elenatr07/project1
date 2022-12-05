export let SEND_MSG = '@@message/SEND';
export let sendMessage = (messageId, sender, text) => ({
    type: SEND_MSG,
    messageId,
    sender,
    text
});