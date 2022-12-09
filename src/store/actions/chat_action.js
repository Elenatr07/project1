export let ADD_CHAT = '@@message/ADD_CHAT';
export let addChat = (title, chatId) => ({
    type: ADD_CHAT,
    title,
    chatId
});