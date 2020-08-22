import Link from 'next/link';
import { useState } from 'react';


export default function Navigation() {
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
                            <a>Profile</a>
                        </Link>
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