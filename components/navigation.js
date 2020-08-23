import Link from 'next/link';
import { useState } from 'react';
import SessionButtons from './LinksButtons/buttonsLinks';
import HomeLogo from './icon/HomeLogo';

// firebase
import { loginWithGoogle } from '../firebase/client';

// Ajustar los estados para quee no se reseteen al desmontar el componenete (Pasando de 'inicio' / 'library')
export default function Navigation() {
    const [hasLog, setHasLog] = useState(false);

    const ButtonLog = (props) => {
        // Realizar un portal para un contenedor que aparezca y agregar un boton que
        // realize la funcion 'handleClick' y que el 'sign in' - 'sign up' sirvan para llamar a ese
        // portal
        return (
            <li>
                <button onClick={handleClick}>{props.nameBtn}</button>
            </li>
        );
    }

    const handleClick = () => {
        loginWithGoogle().then(user => {
            console.log(user);
        }).catch(err => console.log(err));

        // setHasLog(!hasLog);
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
                    {
                        hasLog
                            ? <ButtonLog nameBtn="Profile" />
                            : (
                                <>
                                    <ButtonLog nameBtn="Sign in" />
                                    <ButtonLog nameBtn="Sign up" />
                                </>
                            )
                    }
                </ul>
            </header>

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