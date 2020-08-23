import Link from 'next/link';
import { useState } from 'react';
import HomeLogo from './Icon/HomeLogo';

// components
import SessionButtons from './LinksButtons/buttonsLinks';
import ButtonSesion from './Buttons/buttonSesion';
import ModalSession from './Modal/Session/modalSesion';


// Ajustar los estados para quee no se reseteen al desmontar el componenete (Pasando de 'inicio' / 'library')
export default function Navigation() {
    const [hasLog, setHasLog] = useState(false);
    // Abrir modal
    const [modalState, setModalState] = useState(false);
    const [modalStateSession, setModalStateSession] = useState(true);

    const handleModalSesion = (stateLog) => {
        setModalState(true);
        stateLog
        ? setModalStateSession(stateLog)
        : setModalStateSession(stateLog);
    };

    const ButtonsSignInUp = () => {
        return hasLog
            ? <ButtonSesion modalState={() => handleModalSesion(true)}>
                Profile
            </ButtonSesion>
            : <>
                <ButtonSesion
                    modalState={() => handleModalSesion(true)}>
                    Sign in
                </ButtonSesion>
                <ButtonSesion
                    modalState={() => handleModalSesion(false)}>
                    Sign up
                </ButtonSesion>
            </>
    }

    return (
        <>
            <header>
                <div className="title">
                    <Link href="/">
                        <a className="titleNavbar">
                            <HomeLogo width={42} height={42} />
                            <h1>Manga Reader</h1>
                        </a>
                    </Link>
                </div>
                <ul>
                    <SessionButtons />
                    {ButtonsSignInUp()}
                </ul>
            </header>
            {modalState
                && <ModalSession 
                        stateTypeSession={modalStateSession}
                        changeClick={() => setModalState(false)} 
                    />
            }

            <style jsx>{`
                .title {
                    overflow: hidden;
                }

                .titleNavbar {
                    display: flex;
                    color: #000;
                }

                .titleNavbar > :global(svg) {
                    margin-right: 8px;
                }

                .titleNavbar:hover {
                    color: #09f;
                }
            `}</style>
        </>
    );
}