import React, {useContext, useReducer} from 'react';
import {ProviderContext} from '../Provider';
import Liste from '../styles/Liste';

function Rendu(props) {

    const [state, dispatch] = useContext(ProviderContext);
    console.log('composant rendu')
    console.log(state)
    const listMessages = state.message;
    const myStyle = {
        color: 'red',
    }
    return (
        <>
            <Liste>
                <li style={myStyle}>{listMessages}</li>
            </Liste>
        </>
    );
}

export default Rendu;