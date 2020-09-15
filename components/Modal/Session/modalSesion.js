import ModalPortal from "../modal";
import ButtonSesion from "../../Buttons/buttonSesion";
import { useState } from "react";

// style forms
import { styleForms } from '../../AppLayout/styles';

import Google from '../../Icon/Google';


export default function ModalSession({ changeClick, stateTypeSession = true, handleUSerGoogle }) {
    const [sessionState, setSessionState] = useState(stateTypeSession);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('the Button has Clicked');
    }

    // Refactorizar el codigo
    // Composision del Componente [FALTANTE]
    const FormLogin = ({ nameButton }) => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-input">
                        <input
                            id="username"
                            className="inputsText"
                            type="text"
                            name="username"
                            className="from-control" />
                    </div>
                    <div className="form-group password-form">
                        <label htmlFor="password">Password</label>
                        <a className="ForgotPassword">Olvidaste tu contraseña?</a>
                    </div>
                    <div className="form-input">
                        <input
                            id="password"
                            className="inputsText"
                            type="password"
                            name="passsword"
                            className="from-control" />
                    </div>
                    <div className="checkbox-control">
                        <input
                            id="remember"
                            type="checkbox"
                            name="remember" />
                        <label htmlFor="remember">Remember</label>
                    </div>
                    <li>
                        <button
                            className="btnToLogin"
                            onClick={handleSubmit}>
                            {nameButton}
                        </button>
                    </li>
                </form>

                <style jsx>{styleForms}</style>
            </>
        );
    }

    // Refactorizar el codigo
    // Composision del Componente [FALTANTE]
    const Login = ({ title, nameButton }) => {
        return (
            <>
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="body">
                    <FormLogin nameButton={nameButton} />
                    <ButtonSesion
                        className="btnToLogGoogle"
                        modalState={handleUSerGoogle}>
                        <Google width={24} height={24} />
                        <div style={{ height: 24 }}>Login With Google</div>
                    </ButtonSesion>
                    <div style={{
                        height: 0,
                        margin: '1.5rem 0 .2rem 0',
                        overflow: 'hidden',
                        borderTop: '1px solid #dfe2e5'
                    }}>
                    </div>
                    <ButtonSesion
                        className="btnToRegister"
                        modalState={() => setSessionState(false)}>
                        didn't you has register? Sign up here
                    </ButtonSesion>
                </div>

                <style jsx>{`
                    :global(.btnToLogGoogle) {
                        display: flex;
                        justify-content: center;
                        line-height: inherit;
                        align-items: center;
                        width: 100%;
                        height: 40px;
                        text-align: center;
                        margin-top: 15px;
                        border: 1px solid #f0f0f0;
                        border-bottom: 2px solid #ccc;
                        /*border-image-source: linear-gradient(
                            45deg, 
                            red, 
                            orange
                        );
                        border-image-slice: 1; */
                    }

                    :global(.btnToLogGoogle svg) {
                        margin-right: 5px;
                    }

                    :global(.btnToLogGoogle:hover) {
                        color: #000;
                        background-color: #f2f2f2;
                    }

                    :global(.btnToRegister) {
                        font-size: 15px;
                    }

                    :global(.btnToRegister:hover) {
                        color: #4f5ece;
                        text-decoration: underline;
                    }
                `}</style>
            </>
        );
    }

    // Refactorizar el codigo
    // Composision del Componente [FALTANTE] || PUEDE ESPERAR
    const Register = ({ title, nameButton }) => {
        return (
            <>
                <div className="seccion-state">
                    <ButtonSesion
                        modalState={() => setSessionState(true)}>
                        sign in
                    </ButtonSesion>
                    <ButtonSesion
                        modalState={() => setSessionState(false)}>
                        sign up
                    </ButtonSesion>
                </div>
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit pariatur veniam nobis inventore unde id natus dignissimos ipsam</p>
                    <ButtonSesion>
                        {nameButton}
                    </ButtonSesion>
                </div>

                <style jsx>{`
                    .seccion-state {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}</style>
            </>
        );
    }

    return (
        <>
            <ModalPortal onClose={changeClick}>
                {sessionState
                    ? <Login
                        title="Login"
                        nameButton="Sign in" />
                    : <Register
                        title="Register"
                        nameButton="Sign up" />
                }
            </ModalPortal>

            <style jsx>{`
                .body > :global(li button) {
                    border: 1px solid #09f;
                    margin-bottom: 10px;
                }

                :global(.modal) {}

                :global(.modal .modal-content) {
                    width: 340px;
                    box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
                }
            `}</style>
        </>
    );
}