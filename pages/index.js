import Head from 'next/head';
import { Layout } from '../components/layout';


const Home = () => {
    return (
        <div className="root">
            <Head>
                <title>Manga Reader</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet" />
            </Head>

            <Layout>
                <main>
                    <h2>Index</h2>
                </main>
            </Layout>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                }

                h1, h2, h3 {
                    margin: 0;
                }

                a {
                    text-decoration: none;
                    color: #09f;
                }

                a, button, h1, h2, h3, h4 {
                    font-family: 'Baloo Tamma 2', cursive;
                }

                p {
                    font-family: 'Noto Sans JP', sans-serif;
                }
            `}</style>
        </div>
    );
}

export default Home;