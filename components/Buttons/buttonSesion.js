// firebase
import { loginWithGoogle } from '../../firebase/client';
// import { useState } from 'react';


// realize la funcion 'handleClick' y que el 'sign in' - 'sign up' sirvan para llamar a ese
const handleSesionClick = () => {
    loginWithGoogle().then(user => {
        console.log(user);
    }).catch(err => console.log(err));

    // setHasLog(!hasLog);
}

export default function ButtonSesion({ modalState = handleSesionClick, children }) {
    return (
        <>
            <li>
                <button onClick={modalState}>{children}</button>
            </li>
            <style jsx>{`
                li {
                    list-style: none;
                }
            `}</style>
        </>
    );
}
