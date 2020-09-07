import AppLayout from '../../components/AppLayout/index';
import Generos from '../../components/ComponentGeners/generos';

// style Forms
import { styleForms } from '../../components/AppLayout/styles';
import { useEffect, useState } from 'react';


// Este componente estara disponible solo a las usuarios registrados === undefined || === user.json

const FormUpload = () => {
    const initialManga = {
        name: '',
        description: '',
        category: '',
        generos: [],
        imgCard: '',
        imgPortada: '',
        type: 'Manga'
    };

    const [manga, setManga] = useState(initialManga);
    const [ stateType, setStateType] = useState(true);

    const checkedValue = (value) => {
        setManga({...manga, generos: value });
    }

    const changeInputs = (e) => {
        const {name, value } = e.target;
        setManga({...manga, [name]: value});
    }

    const typeContent = (e) => {
        e.preventDefault();

        if (!stateType) {
            setManga({...manga, type: 'Manga'});
        } else {
            setManga({...manga, type: 'Novel'});
        }

        setStateType(!stateType);
    }

    const handleUploaderSubmit = (e) => {
        e.preventDefault();
        console.log(manga);
    }

    useEffect(() => {
        checkedValue();
    }, [])

    return (
        <>
            <div className="contentForm">
                <form>
                    <div className="form-group" style={{justifyContent: 'space-between'}}>
                        <label htmlFor="Form">Nombre del manga</label>
                        <div className="content-type">
                            <p>type content:</p>
                            <button onClick={typeContent}>
                                {stateType 
                                ? 'Manga' 
                                : 'Novel'}
                            </button>
                        </div>
                    </div>
                    <div className="form-input">
                        <input
                            onChange={changeInputs}
                            name="name"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form">Descripcion del manga</label>
                    </div>
                    <div className="form-input">
                        <textarea 
                            onChange={changeInputs} 
                            name="description" 
                            rows="12">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form">Genero</label>
                    </div>
                    <Generos valueSent={checkedValue} />
                    <div className="form-group">
                        <label htmlFor="Form">Categoria</label>
                    </div>
                    <div className="form-input">
                        <select onChange={changeInputs} name="category">
                            <option disabled>Selecciona una Categoria</option>
                            <option value="Seinen">Seinen</option>
                            <option value="Shonen">Shonen</option>
                            <option value="Shoujo">Shoujo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form2">Img Portada</label>
                    </div>
                    <div className="divButtonUpload">
                        <label className="textFileInput">
                            Portada del Manga
                        </label>
                        <input
                            className="buttonFileUpload"
                            type="file" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form2">Img Card</label>
                    </div>
                    <div className="divButtonUpload">
                        <label className="textFileInput">
                            Tarjeta del Manga
                        </label>
                        <input
                            className="buttonFileUpload"
                            type="file" />
                    </div>
                    <button
                        onClick={handleUploaderSubmit}
                        className="buttonSubmitFormUploader">Subir</button>
                </form>
            </div>

            <style jsx>{styleForms}</style>
        </>
    );
}

export default function UploadMangas() {
    return (
        <>
            <AppLayout title="upload manga">
                <p>This is the Page For Upload Mangas</p>
                <FormUpload />
            </AppLayout>
        </>
    );
}