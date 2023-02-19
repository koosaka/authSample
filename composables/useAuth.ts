import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";

export type AuthProperty = {
  email: string;
  password: string;
};

export type UserProperty = {
  uid?: string;
  user_name: string;
  birthday: string;
  profile_icon: string;
  gender: number;
  is_agreement: boolean;
};

export const useAuth = () => {
  const token = useState<string | null>("token", () => null);

  function getCurrentUserUid() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      return user.uid;
    } else {
      return {};
    }
  }

  const createUser = async (user: UserProperty) => {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "users"), user);
  };

  async function signUp(authProperty: AuthProperty, user: UserProperty) {
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        authProperty.email,
        authProperty.password
      );

      if (response.user.uid) {
        await createUser({ ...user, uid: response.user.uid });
        response.user.getIdToken().then((idToken) => {
          token.value = idToken;
        });
        return await navigateTo("/", { replace: true });
      } else {
        throw new Error("ユーザが正しく作成されませんでした。");
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function signIn(email: string, password: string) {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
            .then(async (idToken) => {
              token.value = idToken;
              await navigateTo("/", { replace: true });
              resolve();
            })
            .catch(reject);
        })
        .catch(reject);
    });
  }

  async function signOut() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      firebaseSignOut(auth)
        .then(async () => {
          token.value = null;
          await navigateTo("/login", { replace: true });
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve();
      const auth = getAuth();
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken;
                resolve();
              })
              .catch(reject);
          } else {
            token.value = null;
            resolve();
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  return {
    getCurrentUserUid,
    signUp,
    signIn,
    signOut,
    token,
    checkAuthState,
  };
};
