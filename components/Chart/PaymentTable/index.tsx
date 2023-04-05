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

type PaymentTable = {
  payments?: TPayment[];
};

export function PaymentTable({ payments }: PaymentTable) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Dt. Pagamento</TableCell>
            <TableCell>Doc emissão</TableCell>
            <TableCell>Data emissão</TableCell>
            <TableCell>Rota / Motivo</TableCell>
            <TableCell>FOP</TableCell>
            <TableCell>USD - Forn</TableCell>
            <TableCell>Câmbio</TableCell>
            <TableCell>Valor à pagar</TableCell>
            <TableCell>Taxas</TableCell>
            <TableCell>USD - Cliente</TableCell>
            <TableCell>Valor à receber</TableCell>
            <TableCell>TX Serviço</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Lucro</TableCell>
            <TableCell>Canal</TableCell>
            <TableCell>Situação</TableCell>
            <TableCell>Total de taxas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments?.map((payment) => (
            <TableRow key={payment.issuanceDoc}>
              <TableCell>{payment.name}</TableCell>
              <TableCell>{payment.customer}</TableCell>
              <TableCell>{payment.paymentDate}</TableCell>
              <TableCell>{payment.issuanceDoc}</TableCell>
              <TableCell>{payment.issuanceDate}</TableCell>
              <TableCell>{payment.routeReason}</TableCell>
              <TableCell>{payment.paymentMethod}</TableCell>
              <TableCell>{payment.usdProvider}</TableCell>
              <TableCell>{payment.exchangeRate}</TableCell>
              <TableCell>{payment.amountToPay}</TableCell>
              <TableCell>{payment.fees}</TableCell>
              <TableCell>{payment.usdCustomer}</TableCell>
              <TableCell>{payment.amountToReceive}</TableCell>
              <TableCell>{payment.serviceTax}</TableCell>
              <TableCell>{payment.total}</TableCell>
              <TableCell>{payment.profit}</TableCell>
              <TableCell>{payment.channel}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.totalFees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
