import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAo8QxIFpmp-UxeNmQshWh-7LF-Eod5P50',
  authDomain: 'clothes-store-5ccc9.firebaseapp.com',
  projectId: 'clothes-store-5ccc9',
  storageBucket: 'clothes-store-5ccc9.appspot.com',
  messagingSenderId: '49769613069',
  appId: '1:49769613069:web:a8b58ac6f5de9d82e99244',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);

export const createUserDocumentFromAuthData = async (userAuth) => {
  if (!userAuth) return;
  const userRef = doc(db, 'users', userAuth.uid);

  try {
    const user = await getDoc(userRef);
    const { displayName, email } = userAuth;

    if (!user.exists()) {
      setDoc(userRef, {
        displayName,
        email,
        createAt: new Date(),
      });
    }
    return userRef;
  } catch (error) {
    console.log(error);
  }
};

export const createUserDocWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const authSignOut = async () => signOut(auth);

export const authObserver = (callback) => onAuthStateChanged(auth, callback);

// ADD TO FIREBASE
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

// GET FROM FIREBASE
export const getCategoriesAndDocuments = async (docName) => {
  const collectionRef = collection(db, docName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryArray = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

  return categoryArray;
};
