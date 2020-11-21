const initialState = {
    messages: [],
    message: ''
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'AJOUTER':
            console.log('ajouter');
            const message = {
                messages: state.messages.concat(state.message),
                message: ''
            }
            console.log(message)
            return {...state, messages: state.messages.concat(message)};
        case 'SET_MESSAGE':
            return {...state, message: action.message}
        default:
            return state;
    }
}

export {reducer, initialState};