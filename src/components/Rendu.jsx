import React, {useContext} from 'react';
import {ProviderContext} from '../Provider';
import Liste from '../styles/Liste';

function Rendu(props) {

    const [state, dispatch] = useContext(ProviderContext);
    const {message} = state;
    // const {color} = state.colors;
    console.log('composant rendu')
    const messages = state.messages.map( message =>
        <li>{state.messages}<br/></li>
    );
    // console.log(state.colors)

    // const Style = {
    //     color: `${state.colors}`,
    // }

    return (
        <>
            <div>
            <Liste>
                {/* <li style={Style}>{state.message}</li> */}
                <li>{messages}</li>
            </Liste>
            </div>
        </>
    );
}

export default Rendu;