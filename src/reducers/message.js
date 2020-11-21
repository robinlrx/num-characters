const initialState = {
    messages: [],
    message: '',
    // colors: [],
    // color: ''
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state, message: action.message,
            }

        // case 'SET_COLOR':
        //     return {
        //         ...state, color: action.color,
        //     }

        case 'AJOUTER':
            // console.log(state)
            return {...state, messages: state.messages.concat(state.message),
                message: '',
                // ...state, colors: state.colors.concat(state.color),
                // color: ''
            };
        case 'DELETE':
            return {...state};
        default:
            return state;
    }
}

export {reducer, initialState};