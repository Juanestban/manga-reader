import Link from 'next/link';
// import { useState } from 'react';


export default function Navigation() {
    // Editar para hacer un mapeo de todos los anchors del navbar
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
                        <Link href="/">
                            <a>Sign in</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Sign up</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <button>Profile</button>
                        </Link>
                    </li>
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