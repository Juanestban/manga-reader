// Components
import Generos from '../../ComponentGeners/generos';

// style Forms
import { styleForms } from '../../AppLayout/styles';


export default function PresentationalComponent({
    errPost,
    conditional,
    stateType,
    typeContent,
    handleUploaderSubmit,
    changeInputs,
    handleChangeImg,
    checkedValue,
    upload
}) {
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
                        <label htmlFor="Form">Nombre {stateType ? 'del' : 'de la'} {conditional()}</label>
                        <div className="content-type">
                            <p>type content:</p>
                            <button onClick={typeContent}>
                                {conditional()}
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
                        <label htmlFor="Form">Descripcion {stateType ? 'del' : 'de la'} {conditional()}</label>
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
                {
                    upload
                        ? (<div
                            className="error-Post"
                            style={{ backgroundColor: '#27ae60', textAlign: 'center', margin: '20px 0 10px 0', color: '#ffff' }}>
                            <h4>{conditional()} subidos correctamente</h4>
                        </div>)
                        : ''
                }
            </div>

            <style jsx>{styleForms}</style>
        </>
    );
}