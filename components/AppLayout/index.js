import Head from 'next/head';
import Navigation from '../navigation';
import Footer from '../footer';

// style
import styles, { globalStyles } from './styles';


export default function AppLayout({ children }) {

    return (
        <>
            <Head>
                <title>manga-reader</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet" />
            </Head>

            <Navigation />

            <main>
                {children}
            </main>

            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>{globalStyles}</style>
        </>
    );
}