import { firestore } from './key';


// Modificar
const mapAllMangas = (mangas, id) => {
    const { name, imgPortada, category } = mangas;
    console.log(name, imgPortada, category);

    return {
        id,
        name,
        imgPortada,
        category
    }
}

export const getAllMangas = (onChange) => {
    return firestore.collection('mangas').onSnapshot(querySnapshot => {
        const mangas = [];
        querySnapshot.forEach(doc => {
            mangas.push({...doc.data(), id: doc.id});
        });
        onChange(mangas);
    });
}

// Modificar
export const getMangasFirstTime = (onChange) => {
    return firestore.collection('mangas').onSnapshot(querySnapshot => {
        const mangas = [];
        querySnapshot.forEach(doc => {
            mangas.push({...doc.data(), id: doc.id});
        });
        onChange(mangas);
    });
}