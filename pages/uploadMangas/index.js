import AppLayout from '../../components/AppLayout/index';
import Generos from '../../components/ComponentGeners/generos';

// style Forms
import { styleForms } from '../../components/AppLayout/styles';


// Este componente estara disponible solo a las usuarios registrados === undefined || === user.json

const handleUploaderSubmit = (e) => {
    e.preventDefault();
    console.log('clicked Button submit Form Uploader Mangas');
}

const FormUpload = () => {
    return (
        <>
            <div className="contentForm">
                <form onSubmit={handleUploaderSubmit}>
                    <div className="form-group">
                        <label htmlFor="Form">Nombre del manga</label>
                    </div>
                    <div className="form-input">
                        <input
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form">Descripcion del manga</label>
                    </div>
                    <div className="form-input">
                        <textarea name="description" rows="12"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form">Genero</label>
                    </div>
                    <Generos />
                    <div className="form-input">
                        <input
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Form">Categoria</label>
                    </div>
                    <div className="form-input">
                        <select name="" id="">
                            <option disabled>Selecciona una Categoria</option>
                            <option value="Seinen">Seinen</option>
                            <option value="Shonen">Shonen</option>
                            <option value="Shoujo">Shoujo</option>
                            <option value="Novel">Novel</option>
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
                    <button className="buttonSubmitFormUploader">Subir</button>
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