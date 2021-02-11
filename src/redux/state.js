import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "How are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Yo", likesCount: 52},
            {id: 4, message: "Yo", likesCount: 14},
            {id: 5, message: "Yo", likesCount: 24},
        ],
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Pavel'},
            {id: 3, name: 'Anna'},
            {id: 4, name: 'Ivan'},
            {id: 5, name: 'Sveta'}
        ],
    },
    messagesPage: {
        messages: [
            {id: 1, message: "Hi",},
            {id: 2, message: "How are you?",},
            {id: 3, message: "Yo",},
            {id: 4, message: "Yo",},
            {id: 5, message: "Yo",},
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}



export default state;