import Link from 'next/link';
import { useState } from 'react';
import SessionButtons from './LinksButtons/buttonsLinks';


export default function Navigation() {
    const [hasLog, setHasLog] = useState(false);

    const ButtonLog = (props) => {
        return (
            <li>
                <button onClick={() => setHasLog(!hasLog)}>{props.nameBtn}</button>
            </li>
        );
    }

    return (
        <>
            <header>
                <div className="title">
                    <Link href="/">
                        <a className="titleNavbar">
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
                    color: #000;
                }

                .titleNavbar:hover {
                    color: #09f;
                }
            `}</style>
        </>
    );
}