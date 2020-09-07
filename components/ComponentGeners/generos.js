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

const sendGen = []

export default function Generos({valueSent}) {
    const handleChangeCheckBox = (e) => {
        const { checked, value } = e.target
        if (checked) {
            // valueSent(value)
            sendGen.push(value)
            valueSent(sendGen)
        } else {
            const position = sendGen.indexOf(value)
            sendGen.splice(position, 1)
            valueSent(sendGen)
        }
    }

    return (
        <>
            <div className="contenedor">
                {
                    generos.map((gen, index) => (
                        <div key={index} className="content">
                            <input onChange={handleChangeCheckBox} id={gen} type="checkbox" value={gen} />
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

                input + label:after {
                    content: "";
                    display: none;
                    width: 12px;
                    height: 12px;
                    position: absolute;
                    margin-left: 1px;
                    background-color: #28b463;
                    border: 1px solid #28b463;
                    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
                }

                input:checked + label:before {
                    border-color: green;
                }

                input:checked + label:after {
                    display: block;
                }

            `}</style>
        </>
    )
} 