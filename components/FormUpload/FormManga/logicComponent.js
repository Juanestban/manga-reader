import { useEffect, useState } from 'react';
import PresentationalComponent from './presentational';
import { postMangas, setImages } from '../../../firebase/mangas';
import { useRouter } from 'next/router';

export default function LogicalComponent() {
    const initialManga = {
        name: '',
        description: '',
        category: 'Seinen',
        generos: [],
        imgCard: '',
        imgPortada: '',
        type: 'Manga',
    };

    const router = useRouter();

    const [manga, setManga] = useState(initialManga);
    const [stateType, setStateType] = useState(true);
    const [upload, setUpload] = useState(undefined);
    const [errPost, setErrPost] = useState(false);

    const [stateImgAll, setStateImgAll] = useState([]);


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

    const handleChangeImg = (e) => {
        const { name } = e.target;
        const nameManga = manga.name;
        const Files = {
            name,
            nameManga,
            "file": e.target.files[0]
        }


        if (nameManga !== '') {
            if (stateImgAll.length === 0) {
                setStateImgAll([Files]);
            } else {
                setStateImgAll([...stateImgAll, Files]);
            }
        }

        // Guardar el link en un state de react y el archivo file para realizar toda la subida
        // con pulsar el boton de [Enviar || Subir]
    }

    const handleUploaderSubmit = async (e) => {
        e.preventDefault();

        if (manga.generos !== undefined && manga.name !== '' && manga.description !== '') {
            // editar AQUI
            let url1, url2;
            try {
                if (stateImgAll[0].name === 'portManga') {
                    await setImages(stateImgAll[1]).then(url => {
                        url1 = url;
                    });
                    await setImages(stateImgAll[0]).then(url => {
                        url2 = url;
                    });
                    setManga({ ...manga, imgCard: url1, imgPortada: url2 });
                }

                if (stateImgAll[0].name === 'cardManga') {
                    await setImages(stateImgAll[0]).then(url => {
                        url1 = url;
                    });;
                    await setImages(stateImgAll[1]).then(url => {
                        url2 = url;
                    });;
                    setManga({ ...manga, imgCard: url1, imgPortada: url2 });
                }
            } catch (err) {
                console.log(err);
            }

            await postMangas({ ...manga, imgCard: url1, imgPortada: url2 }).then(() => {
                setUpload(true);
                router.push('/');
            });
        } else {
            setErrPost(true);
            setUpload(undefined);
        }
    }

    const conditionalRendering = () => {
        return stateType ? 'Manga' : 'Novel'
    }

    useEffect(() => {
        handleUploaderSubmit;
    }, [])

    return (
        <PresentationalComponent
            checkedValue={checkedValue}
            errPost={errPost}
            upload={upload}
            changeInputs={changeInputs}
            handleChangeImg={handleChangeImg}
            handleUploaderSubmit={handleUploaderSubmit}
            typeContent={typeContent}
            stateType={stateType}
            conditional={conditionalRendering}
        />
    );
}