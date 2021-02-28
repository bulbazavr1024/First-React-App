import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news_reducer";


let reducers = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers);

window.store = store;



export default store;
