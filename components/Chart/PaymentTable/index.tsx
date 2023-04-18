import { TPayment } from "@/model/payments";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";

type PaymentTable = {
  payments?: TPayment[];
};

export function PaymentTable({ payments }: PaymentTable) {
  const router = useRouter()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>#</TableCell>
            {/* <TableCell>Nome</TableCell> */}
            <TableCell sx={{whiteSpace:'noWrap'}}>Cliente</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Dt. Pagamento</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Doc emissão</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Data emissão</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Rota / Motivo</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>FOP</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>USD - Forn</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Câmbio</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Valor à pagar</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Taxas</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>USD - Cliente</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Valor à receber</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>TX Serviço</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Total</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Lucro</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Canal</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Situação</TableCell>
            <TableCell sx={{whiteSpace:'noWrap'}}>Total de taxas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments?.map((payment, key) => (
            <TableRow key={`${key}+${payment.name}`} onClick={()=>router.push(`/payment/edit?id=${payment?.name}`)}>
              <TableCell sx={{whiteSpace:'noWrap'}}>{key}</TableCell>
              {/* <TableCell sx={{whiteSpace:'noWrap'}}>{payment.name}</TableCell> */}
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.customer}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.paymentDate}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.issuanceDoc}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.issuanceDate}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.routeReason}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.paymentMethod}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.usdProvider}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.exchangeRate}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.amountToPay}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.fees}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.usdCustomer}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.amountToReceive}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.serviceTax}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.total}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.profit}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.channel}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.status}</TableCell>
              <TableCell sx={{whiteSpace:'noWrap'}}>{payment.totalFees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
