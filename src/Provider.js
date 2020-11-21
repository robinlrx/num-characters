import React, {createContext, useReducer} from 'react';
import {reducer, initialState} from './reducers/message';
import styled from "styled-components";

const ProviderContext = createContext()

    const Wrapper = styled.body`
    background-color: #4200ff;
    height: 100vh;
    `;

function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Wrapper>
        <ProviderContext.Provider value={[state, dispatch]}>
            {props.children}
        </ProviderContext.Provider>
        </Wrapper>
    );
}

export {ProviderContext, Provider};