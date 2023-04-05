"use client";

import { PaymentTable } from "@/components/Chart/PaymentTable";
import { app } from "@/infra/firebase";
import { TPayment } from "@/model/payments";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

export default function Client() {
  const db = getFirestore(app);
  const [dados, setDados] = useState<TPayment[]>([]);

  useEffect(() => {
    const fetchDados = async () => {
      const minhaColecaoRef = collection(db, "payment");
      const minhaQuery = query(minhaColecaoRef, limit(PAGE_SIZE));
      const querySnapshot = await getDocs(minhaQuery);

      const dadosArray: any = [];
      querySnapshot.forEach((doc) => {
        dadosArray.push({ id: doc.id, ...doc.data() });
      });
      setDados(dadosArray);
    };

    fetchDados();
  }, []);

  console.log(dados);
  // const fetchPost = async () => {
  //   const first = query(
  //     collection(db, "users"),
  //     orderBy("issuanceDate"),
  //     limit(25)
  //   );
  //   const documentSnapshots = await getDocs(first);
  //   const teste = documentSnapshots.forEach((doc) => {
  //     return doc.data();
  //   });

  //   console.log(teste);
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  // console.log(todos[0]);
  // const [documents, setDocuments] = useState([]);
  // const [lastDoc, setLastDoc] = useState(null);

  // useEffect(() => {
  //   loadDocuments();
  // }, []);

  // const loadDocuments = async () => {
  //   // const usersRef = doc(db, "users", "04orQtWMwJ93I3YG9s6z");
  //   // const docSnap = await getDoc(usersRef);
  //   // console.log("docSnap", docSnap.data());
  //   const first = query(
  //     collection(db, "users"),
  //     orderBy("issuanceDate"),
  //     limit(25)
  //   );
  //   const documentSnapshots = await getDocs(first);

  //   console.log(documentSnapshots);
  // };

  return (
    <>
      <PaymentTable payments={dados} />
    </>
  );
}
