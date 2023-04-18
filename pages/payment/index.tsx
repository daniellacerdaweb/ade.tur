import { PaymentTable } from "@/components/Chart/PaymentTable";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Button, CircularProgress, LinearProgress, Typography } from "@mui/material";
import { app } from "@/infra/firebase";

import { collection, getFirestore, query, getDocs, limit, orderBy, startAfter } from "firebase/firestore";

export const db = getFirestore(app);
const numberLimit = 50
export default function Client() {
  const [list, setList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState<any>();
  // const lastVisible = doc.docs[doc.docs.length-1];

  const fetchPayments = async () => {
    setLoading(true);
    const userCollection = query(collection(db, "payment"), limit(numberLimit)) ;
    const doc = await getDocs(userCollection);
    setDocs(doc)
    const data = doc.docs.map((x) => {
      const props = x.data()
      return {id:x.id, ...props }
    });
      setList(data)
      setLoading(false);
}

const moreItens = async () => {
  setLoading(true);
  const lastVisible = docs.docs[docs.docs.length-1];


  const next = query(collection(db, "payment"),
  startAfter(lastVisible),
  limit(numberLimit));
  const getNewDocs = await getDocs(next);

  setDocs(getNewDocs)

  const data = getNewDocs.docs.map((x) => {
    const props = x.data()
    return {id:x.id, ...props }
  });

    setList([...list,...data])
    setLoading(false);
}

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <>
      <Layout>
      <PaymentTable payments={list} />
         <Button onClick={moreItens}>Carregar Mais</Button>
        {loading && <LinearProgress></LinearProgress>}
      </Layout>
    </>
  );
}