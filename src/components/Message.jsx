import React, { useState, useReducer, useContext } from 'react';
import { reducer, initialState } from '../reducers/message';
import {ProviderContext} from '../Provider';
import Button from '../styles/Button';
import Form from '../styles/Form';
import WrapperMessage from '../styles/WrapperMessage';

function Message(props) {
    const [state, dispatch] = useContext(ProviderContext);
    const {message} = state;
    // const {color} = state;
    

    const motLength = (message) => 
        message
        .split(' ')
        .map( word => word.length)
        .filter(number => number != 0) +'\n';

    function onInputChange(e) {
        dispatch({type: 'SET_MESSAGE', message: e.target.value })
    };

    // function onThemeChange(e) {
    //     dispatch({type:'SET_COLOR', color: e.target.value});
    //  }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: 'AJOUTER'})
    };
    return (
        <WrapperMessage>
            <Form onSubmit={handleSubmit}>
                <p><label>Votre message :<br/><strong>{message}</strong></label></p>
                { message && 
                    <p>Nombre de lettres : <strong>{motLength(message)}</strong></p>
                }
                <p><input type="text" onChange={onInputChange} value={message}/></p>
                {/* <p><label>Selectionner un rendu : </label></p>
                <select value={color} defaultValue = 'palevioletred' onChange={onThemeChange}>
                    <option value="palevioletred">palevioletred</option>
                    <option value="red">red</option>
                </select> */}
                <Button>Valider</Button>
            </Form>
        </WrapperMessage>
    );
}

export default Message;