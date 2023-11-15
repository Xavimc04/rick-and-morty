export const initialState = {
    episodes: [], 
    selectedCharacter: null
}

export default function reducer(state, action) { 
    if(action.type === 'SET_EPISODES') return {
        ...state,
        episodes: action.payload
    }

    if(action.type === 'SET_SELECTED_CHARACTER') return {
        ...state,
        selectedCharacter: action.payload
    }

    return state; 
}