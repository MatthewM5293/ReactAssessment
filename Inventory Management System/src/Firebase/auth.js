import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function logOut() {
    return signOut(auth);
}