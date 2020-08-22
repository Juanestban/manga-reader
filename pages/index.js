import AppLayout from '../components/AppLayout/index';


const Home = () => {
    return (
        <div className="root">
            <AppLayout title="Manga Reader">
                <h2>Index</h2>
                <button>Hola, Soy un Button</button>
            </AppLayout>
        </div>
    );
}

export default Home;