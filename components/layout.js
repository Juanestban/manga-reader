import Navigation from './navigation';
import Footer from './footer';


export const Layout = (props) => {
    return (
        <>
            <Navigation />
            <div>
                { props.children }
            </div>
            <Footer />
        </>
    );
}