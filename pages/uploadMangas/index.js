import AppLayout from '../../components/AppLayout/index';

// style Forms
import { styleForms } from '../../components/AppLayout/styles';

const FormUpload = () => {
    return (
        <>
            <form style={{ border: '1px solid red' }}>
                <div className="form-group">
                    <label htmlFor="Form">Formulario</label>
                </div>
                <div className="form-input">
                    <input
                        type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Form2">session test</label>
                </div>
                <div className="form-input">
                    <input
                        className="buttonFileUpload"
                        type="file" />
                </div>
            </form>

            <style jsx>{styleForms}</style>
        </>
    );
}

export default function UploadMangas() {
    return (
        <>
            <AppLayout title="upload manga">
                <FormUpload />
                <p>This is the Page For Upload Mangas</p>
            </AppLayout>
        </>
    );
}