import Link from 'next/link';
import { useState, useEffect } from 'react';
import HomeLogo from './Icon/HomeLogo';

// components
import SessionButtons from './LinksButtons/buttonsLinks';
import ModalSession from './Modal/Session/modalSesion';
import ButtonsSignInOrUp from './ButtonSignInOrUp/index'
import Uploader from './Icon/uploader'
import { loginWithGoogle, onAuthStateChanged } from '../firebase/client';


// Ajustar los estados para quee no se reseteen al desmontar el componenete (Pasando de 'inicio' / 'library')
export default function Navigation() {
    const [user, setUser] = useState(undefined);
    // Abrir modal
    const [modalState, setModalState] = useState(false);
    const [modalStateSession, setModalStateSession] = useState(true);

    useEffect(() => {
        onAuthStateChanged(user => { 
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
         });
    }, []);

    const handleSesionClickGoogle = () => {
        loginWithGoogle().then(user => {
            setModalState(false);
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        }).catch(err => console.log(err));
    }

    const handleModalSesion = (stateLog) => {
        setModalState(true);
        stateLog
            ? setModalStateSession(stateLog)
            : setModalStateSession(stateLog);
    };


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
                    <li>
                        <Link href="/uploadMangas">
                            <a className="uploadMangaLink">
                                <Uploader width="15" height="15" />
                            </a>
                        </Link>
                    </li>
                    <ButtonsSignInOrUp user={user} handleModalSesion={handleModalSesion} />
                </ul>
            </header>
            {modalState
                && <ModalSession
                    handleUSerGoogle={handleSesionClickGoogle}
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

                .uploadMangaLink {
                    display: flex;
                    align-items: center;
                }

                .uploadMangaLink,
                :global(.img-profile) {
                    fill: #000000;
                }

                .uploadMangaLink:hover,
                :global(.img-profile:hover) {
                    fill: rgb(0, 153, 255);
                }
            `}</style>
        </>
    );
}