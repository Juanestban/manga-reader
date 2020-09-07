import { useEffect } from "react";


const generos = [
    "Acción",
    "Aventura",
    "Comedia",
    "Drama",
    "Recuerdos de la vida",
    "Ecchi",
    "Fantasia",
    "Magia",
    "Sobrenatural",
    "Horror",
    "Misterio",
    "Psicológico",
    "Romance",
    "Ciencia Ficción",
    "Thriler",
    "Deporte",
    "Girls Love",
    "Boys Love",
    "Harem",
    "Mecha",
    "Supervivencia",
    "Reencarnación",
    "Gore",
    "Apocalíptico",
    "Tragedia",
    "Vida Escolar",
    "Historia",
    "Policiaco",
    "Crimen",
    "Superpoderes",
    "Vampiros",
    "Artes Marciales",
    "Samurái",
    "Genero Bender",
    "Realidad Virtual",
    "Ciberpunk",
    "Musica",
    "Parodia",
    "Animación",
    "Demonios",
    "Familia",
    "Extranjero",
    "Niños",
    "Realidad",
    "Novela",
    "Guerra",
]

export default function Generos() {
    return (
        <>
            <div className="contenedor">
                {
                    generos.map((gen, index) => (
                        <div key={index} className="content">
                            <input onChange={e => {console.log(e.target.checked)}} id={gen} type="checkbox" />
                            <label htmlFor={gen}>{gen}</label>
                        </div>
                    ))
                }
            </div>

            <style jsx>{`
                .contenedor {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    border: 1px solid red;
                    margin-bottom: 20px;
                }
                .contenedor .content {
                    width: 18%;
                }

                input {
                    visibility: hidden;
                }

                label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                input + label:before {
                    content: "";
                    display: block;
                    width: 15px;
                    height: 15px;
                    margin-right: 5px;
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                }
                
                input:checked + label {
                    background-color: blue;
                }

                input:checked + label:before {
                    border-color: green;
                }

            `}</style>
        </>
    );
} 