import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDygjLhG0y437mJQmzEe1gHnlDW40Sfp3Y",
  authDomain: "vanlife-111.firebaseapp.com",
  projectId: "vanlife-111",
  storageBucket: "vanlife-111.appspot.com",
  messagingSenderId: "603567805333",
  appId: "1:603567805333:web:16ae2f7c2b31e41036dc9c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getVans() {
  const vansCollectionRef = collection(db, "vans");
  const querySnapshot = await getDocs(vansCollectionRef);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
