export const initialState = {
    episodes: []
}

export default function reducer(state, action) {
    console.log('Arrived some action')

    if(action.type === 'SET_EPISODES') return {
        ...state,
        episodes: action.payload
    }

    return state; 
}