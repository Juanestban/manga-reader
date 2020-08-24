import ModalPortal from "../modal";
import ButtonSesion from "../../Buttons/buttonSesion";
import { useState } from "react";

export default function ModalSession({ changeClick, stateTypeSession = true }) {
    const [sessionState, setSessionState] = useState(stateTypeSession);
    // Componente Login y Register para haer una ternaria que me muestre determinado compoenente
    // dependiendo de la prop que este cambiando de estado

    const StateSesion = ({ title, nameButton }) => {
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
                        justify-content: space-between;
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
                    ? <StateSesion
                        title="Esto es el Login"
                        nameButton="Sign in" />
                    : <StateSesion
                        title="Esto es el Registro"
                        nameButton="Sign up" />
                }
            </ModalPortal>

            <style jsx>{`
                .body > :global(li button) {
                    border: 1px solid #09f;
                    margin-bottom: 10px;
                }
            `}</style>
        </>
    );
}