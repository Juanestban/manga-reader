import ListCards from '../components/Cards/listCards';


const Home = () => {
    return (
        <div className="root">
            <h2>Index</h2>
            <ListCards />
            <div style={{height: 400}}>
                Un contenedor adicional para mas espaciado al footer
            </div>
        </div>
    );
}

export default Home;