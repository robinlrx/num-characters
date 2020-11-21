import React, {createContext, useReducer} from 'react';
import {reducer, initialState} from './reducers/message';

const ProviderContext = createContext()

function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ProviderContext.Provider value={[state, dispatch]}>
            {props.children}
        </ProviderContext.Provider>
    );
}

export {ProviderContext, Provider};