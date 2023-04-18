import { PaymentTable } from "@/components/Chart/PaymentTable";
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Button, CircularProgress, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from "@mui/material";
import { app } from "@/infra/firebase";

import { collection, getFirestore, query, getDocs, limit, orderBy, startAfter } from "firebase/firestore";

export const db = getFirestore(app);
const numberLimit = 50
export default function Client() {
  const [data, setData] = useState<any>([]);
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
    setData(data)
      setLoading(false);
}



  useEffect(() => {
    // fetchPayments();
  }, []);

  const FormEdit = () => { return<form>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="data-emissao"
          label="Data emissão"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={data.dataEmissao}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl  fullWidth>
          <InputLabel id="fop-label">FOP</InputLabel>
          <Select
            labelId="fop-label"
            id="fop"
            value={data.fop}

          >
            <MenuItem value="CARTÃO ADEMIR - AX">CARTÃO ADEMIR - AX</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="valor-pagar"
          label="Valor à pagar"
          type="number"
          value={data.valorPagar}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="taxas"
          label="Taxas"
          type="number"
          value={data.taxas}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="tx-servico"
          label="TX Serviço"
          type="number"
          value={data.txServico}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="total"
          label="Total"
          type="number"
          value={data.total}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl  fullWidth>
          <InputLabel id="situacao-label">Situação</InputLabel>
          <Select
            labelId="situacao-label"
            id="situacao"
            value={data.situacao}

          >
            <MenuItem value="PENDENTE">PENDENTE</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  </form>}

  return (
    <>
      <Layout>
        <FormEdit />
        {loading && <LinearProgress></LinearProgress>}
      </Layout>
    </>
  );
}