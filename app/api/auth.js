import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

export default {
  login,
  register,
};
