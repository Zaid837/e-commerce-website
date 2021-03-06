import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD1dPFWr7h6tTAVsbPUk_vyjZtnn_U0EfY",
    authDomain: "radstyles-db.firebaseapp.com",
    projectId: "radstyles-db",
    storageBucket: "radstyles-db.appspot.com",
    messagingSenderId: "189546722956",
    appId: "1:189546722956:web:adeba05248933995242da9",
    measurementId: "G-Y44ZZVGKMC"
}

export const addUserData = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user" , error.message)
        }
    }

    return userRef;

}
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;