import AppLayout from '../../components/AppLayout/index';
import Generos from '../../components/ComponentGeners/generos';

// firestore
import { postMangas, setImages } from '../../firebase/mangas';

// style Forms
import { styleForms } from '../../components/AppLayout/styles';
import { useEffect, useState } from 'react';


const FormUpload = () => {
    const initialManga = {
        name: '',
        description: '',
        category: 'Seinen',
        generos: [],
        imgCard: '',
        imgPortada: '',
        type: 'Manga',
    };

    const [manga, setManga] = useState(initialManga);
    const [stateType, setStateType] = useState(true);
    const [upload, setUpload] = useState(undefined);
    const [errPost, setErrPost] = useState(false);


    const checkedValue = (value) => {
        setManga({ ...manga, generos: value });
    }

    const changeInputs = (e) => {
        const { name, value } = e.target;
        setManga({ ...manga, [name]: value });
    }

    const typeContent = (e) => {
        e.preventDefault();

        if (!stateType) {
            setManga({ ...manga, type: 'Manga' });
        } else {
            setManga({ ...manga, type: 'Novel' });
        }

        setStateType(!stateType);
    }

    const handleChangeImg = async (e) => {
        const { name } = e.target;
        const nameManga = manga.name;
        const Files = {
            name,
            nameManga,
            "file": e.target.files[0]
        }

        // Guardar el link en un state de react y el archivo file para realizar toda la subida
        // con pulsar el boton de [Enviar || Subir]
        await setImages(Files).then(url => {
            const URL = url;
            console.log('esta es la url', URL);
        });
    }

    const handleUploaderSubmit = (e) => {
        e.preventDefault();

        if (manga.generos !== undefined && manga.name !== '' && manga.description !== '') {
            postMangas(manga);
            setUpload(true);
        } else {
            setErrPost(true);
            setUpload(undefined);
        }
    }

    const conditionalRendering = () => {
        return stateType ? 'Manga' : 'Novel'
    }

    useEffect(() => {
        checkedValue();
    }, [])

    return (
        <>
            {
                errPost
                    ? (<div
                        className="error-Post"
                        style={{ backgroundColor: 'red', textAlign: 'center', margin: '20px 0 10px 0', color: '#ffff' }}>
                        <h4>Datos Erroneos o fantantes</h4>
                    </div>)
                    : ''
            }
            <div className="contentForm">
                <form>
                    <div className="form-group" style={{ justifyContent: 'space-between' }}>
                        <label htmlFor="Form">Nombre {stateType ? 'del' : 'de la'} {conditionalRendering()}</label>
                        <div className="content-type">
                            <p>type content:</p>
                            <button onClick={typeContent}>
                                {conditionalRendering()}
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
                        <label htmlFor="Form">Descripcion {stateType ? 'del' : 'de la'} {conditionalRendering()}</label>
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
                            name="portManga"
                            onChange={handleChangeImg}
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
                            name="cardManga"
                            onChange={handleChangeImg}
                            type="file" />
                    </div>
                    <button
                        onClick={handleUploaderSubmit}
                        className="buttonSubmitFormUploader">Subir</button>
                </form>
                {upload ? 'Datos subidos correctamente' : ''}
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