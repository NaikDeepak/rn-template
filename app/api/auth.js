import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const login = ({ email, password }) => {
  try {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

const register = ({ name, email, password }) => {
  try {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

const forgotPassword = (email) => {
  try {
    const auth = getAuth();
    console.log("AUTH ", auth);
    return sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};

export default {
  login,
  register,
  forgotPassword,
};
