import Link from 'next/link';
import { useState } from 'react';


export default function Navigation() {
    const [hasSession, setHasSession] = useState(false);

    // Pulir
    const SessionChange = () => {
        setHasSession(!hasSession);
    }

    // Pulir
    const RenderSessionButton = () => {
        if (hasSession) {
            return <SessionButton nameButtons="Profile" />
        }
        return (
            <>
                <SessionButton nameButtons="Login" />
                <SessionButton nameButtons="Sign in" />
            </>
        );
    }

    // Pulir
    const SessionButton = (props) => {
        return (
            <Link href={props.url}>
                <a 
                    onClick={SessionChange}
                    style={{
                        padding: '8px',
                        color: '#000',
                        marginLeft: 8
                    }}
                >
                    {props.nameButtons}
                </a>
            </Link>
        );
    }
    // Pulir
    SessionButton.defaultProps = {
        url: '/'
    }

    return (
        <>
            <header>
                <div className="title">
                    <h1>Manga Reader</h1>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/library">
                            <a>Biblioteca</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Novels</a>
                        </Link>
                    </li>
                    <li>
                        <RenderSessionButton />
                    </li>
                </ul>
            </header>

            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                    height: 49px;
                    position: sticky;
                    padding: 0 40px;
                    border-bottom: 1px solid #eaeaea;
                }

                header ul {
                    display: flex;
                    align-items: center;
                }

                li {
                    list-style: none;
                    margin: 0 8px;
                }

                a {
                    padding: 8px;
                    color: #000;
                }

                a:hover {
                    /* */
                }
            `}</style>
        </>
    );
}