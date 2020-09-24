import { useRouter } from 'next/router';

export default function DetailsManga(props) {
    // Finalizar todo creando un componenete detalles para reutilizarlo en la page de DetailsNovel
    // Importar y crear todo en el componente DetailsContext
    const {
        name,
        description,
        type,
        category,
        generos,
        imgCard,
        imgPortada
    } = props;

    return (
        <>
            <h1>Llegada</h1>
            <img src={imgCard} alt="Imagen1" />
            <img src={imgPortada} alt="Imagen2" />
            <h4>{name}</h4>
            <p>{description}</p>
            <span>{type}</span>
            <p>{category}</p>
            <p>{generos.join(' - ')}</p>
        </>
    );
}

// DataFetching
// Existe el getServerSideProps, el getInitialProps y el getStaticProps
export async function getServerSideProps(context) {
    const { params, res } = context;
    const { id } = params;

    const api = await fetch(`http://localhost:3000/api/detailsManga/${id}`)
    if (api.ok) {
        const props = await api.json();
        return {props};
    }
}