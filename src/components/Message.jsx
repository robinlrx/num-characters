import React, { useState, useReducer, useContext } from 'react';
import { reducer, initialState } from '../reducers/message';
import {ProviderContext} from '../Provider';

function Message(props) {
    const [state, dispatch] = useContext(ProviderContext);

    const {message} = state;

    const wordLength = (word) => 
        word
        .split(' ')
        .map( word => word.length)
        .filter(number => number != 0);

    function onInputChange(e) {
        dispatch({type: 'SET_MESSAGE', message: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: 'AJOUTER'})
    };

    return (
        <React.Fragment>
            <h2>Page message</h2>

            <form onSubmit={handleSubmit}>
                <p><label>Votre message : {message}</label></p>
                <input type="text" onChange={onInputChange} value={message}/>
                <p><input type="submit"/></p>
            </form>
            { message && 
                <div>
                    <p>Nombre de lettres : <strong>{wordLength(message)}</strong></p>
                </div>
            }
        </React.Fragment>
    );
}

export default Message;