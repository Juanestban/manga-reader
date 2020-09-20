import AppLayout from '../../components/AppLayout/index';
import FormManga from '../../components/FormUpload/FormManga/formManga';

export default function UploadMangas() {
    return (
        <>
            <AppLayout title="upload manga">
                <p>This is the Page For Upload Mangas</p>
                <FormManga />
            </AppLayout>
        </>
    );
}