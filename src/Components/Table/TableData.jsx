import './table.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableData = () => {

    const rows = [
        {
            id: 113546,
            product: "Apple Watch",
            img: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
            customer: "Mark Toen",
            date: "1 May",
            amount: 754,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 113546,
            product: "Apple Watch",
            img: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
            customer: "Mark Toen",
            date: "1 May",
            amount: 754,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 113546,
            product: "Apple Watch",
            img: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
            customer: "Mark Toen",
            date: "1 May",
            amount: 754,
            method: "Cash on Delivery",
            status: "Approved"
        },
    ]

    return (
        <TableContainer component={Paper} className = "table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
      
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                <div className="cellWrapper">
                <img src={row.img} alt="product image" className="image" />
                {row.product}
                </div>
                </TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell>
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default TableData;