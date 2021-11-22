const initialState = { value: 0 }

function reducers(state = initialState, action) {
    if (action.type == 'INCREMENT') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type == 'DECREMENT') {
        return {
            ...state,
            value: state.value - 1
        }
    }
    return state
}

export default reducers;