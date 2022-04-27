import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, collectionName),
      orderBy("createdAt", "desc"),
      limit(1)
    ); //can add later limits to just recent (1)

    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
        setDocs(documents);
      });
    });

    return () => unsub(); //questionable
  }, [collectionName]);
  return { docs };
};

export default useFirestore;
