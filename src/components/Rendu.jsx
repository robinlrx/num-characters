import React, {useContext, useReducer} from 'react';
import {ProviderContext} from '../Provider';

function Rendu(props) {

    const [state, dispatch] = useContext(ProviderContext);
    console.log('composant rendu')
    console.log('le message')
    console.log(state.message)
    
    return (
        <div>
            <h2>Page rendu</h2>
            <ul>
                <li>{state.message}</li>
            </ul>
        </div>
    );
}

export default Rendu;