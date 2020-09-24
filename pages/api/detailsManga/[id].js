import { firestore } from '../../../firebase/admin';

export default (req, res) => {
    const { query } = req;
    const { id } = query;

    firestore
        .collection('mangas')
        .doc(id)
        .get()
        .then((doc) => {
            const data= doc.data();
            res.json(data);
        }).catch(() => {
            res.json({"msgError": "La url a la que deseas acceder no existe = Error 404"});
        })
}