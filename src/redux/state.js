let state = {
    profilePage: {
        posts: [
            {id: 1, message: "How are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Yo", likesCount: 52},
            {id: 4, message: "Yo", likesCount: 14},
            {id: 5, message: "Yo", likesCount: 24},
        ],
        newPostText: '4mo_loh'

    },
    messagesPage: {
        messages: [
            {id: 1, message: "Hi",},
            {id: 2, message: "How are you?",},
            {id: 3, message: "Yo",},
            {id: 4, message: "Yo",},
            {id: 5, message: "Yo",},
        ],
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Pavel'},
            {id: 3, name: 'Anna'},
            {id: 4, name: 'Ivan'},
            {id: 5, name: 'Sveta'}
        ],
    },
    sidebar: {}
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export let subscribe = (observer) => {

}
export default state;