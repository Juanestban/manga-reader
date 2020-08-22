import AppLayout from '../components/AppLayout/index';
import ListCards from '../components/Cards/listCards';


const Home = () => {
    return (
        <div className="root">
            <AppLayout title="Manga Reader">
                <h2>Index</h2>
                <ListCards />
            </AppLayout>
        </div>
    );
}

export default Home;