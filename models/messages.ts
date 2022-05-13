import config from "../config/config.json";


const messageModel = {
    getMessages: async function getMessages() {
        const response = await fetch(`${config.base_url}/messages`);
        const result = await response.json();

        return result.data;
    },
};


export default messageModel;
