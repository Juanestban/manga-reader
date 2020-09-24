import firebase, { firestore } from './key';

// const firestorage = firebase.;


// Modificar
const mapAllMangas = (mangas, id) => {
    const { name, imgPortada, category, type } = mangas;

    return {
        id,
        name,
        imgPortada,
        category,
        type
    }
}

export const getAllMangas = (onChange) => {
    return firestore.collection('mangas').onSnapshot(querySnapshot => {
        const mangas = [];
        querySnapshot.forEach(doc => {
            mangas.push({ ...doc.data(), id: doc.id });
        });
        onChange(mangas);
    });
}

// Post
export const postMangas = (manga) => {
    return firestore.collection('mangas').add(manga);
}


// Fire Storage

export const setImages = async (files) => {
    const { name, nameManga, file } = files;

    const refStorage = firebase.storage().ref('mangas/');
    const refName = refStorage.child(`${nameManga}/${name}.jpg`);
    await refName.put(file);

    return await refName.getDownloadURL();
}

export const getMetaDataStorage = (myRef) => {
    const getRef = myRef;

    getRef.getMetadata();
}