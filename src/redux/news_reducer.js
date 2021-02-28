const SET_COUNT = 'SET_COUNT'


let initialState = {
    bitcoin: null,
    ethereum: null,
    pangolin: null,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNT: {
            return {...state, bitcoin: action.count.bitcoin.usd, ethereum: action.count.ethereum.usd, pangolin: action.count.pangolin.usd}
        }
        default:
            return state;
    }
}

export const setCount = (count) => ({type: SET_COUNT, count})

export default newsReducer