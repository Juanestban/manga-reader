import firebase from './key';


const mapUserFromFirebaseAuthToUser = (user) => {
    const { displayName, photoURL, uid } = user;
    return {
        id: uid,
        firstName: displayName,
        avatar: photoURL
    };
}

export const onAuthStateChanged = (onChange) => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
            const normaliedUser = mapUserFromFirebaseAuthToUser(user);
            onChange(normaliedUser);
        })
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
}