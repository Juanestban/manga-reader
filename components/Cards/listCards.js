import { useState, useEffect } from "react";
import { getAllMangas } from '../../firebase/mangas';

// component Card
import Card from "./card";


const styleContentMarco = {
    display: 'flex',
    justifyContent: 'start',
    padding: '10px 20px',
    flexWrap: 'wrap',
    border: '1px solid #eaeaea',
    borderRadius: 10,
    boxSizing: 'border-box'
}


export default function ListCards() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        getAllMangas(arrayMangas => {
            setValues(arrayMangas);
        });
    }, []);

    return (
        <div style={styleContentMarco}>
            {values.map(manga => (
                <Card key={manga.id} dataGetter={manga} />
            ))}
        </div>
    );
}