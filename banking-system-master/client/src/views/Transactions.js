import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    margin: "50px auto",
    width: "80%",
  },
  alert: {
    margin: "10px 0",
  },
});

export default function Transactions() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gettransactions");
        setTransactions(res.data);
      } catch (err) {
        setError("Failed to fetch transactions. Please try again later.");
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      {error && (
        <Alert severity="error" className={classes.alert}>
          {error}
        </Alert>
      )}
      <Table className={classes.table} aria-label="transactions table">
        <TableBody>
          {transactions.map((data, index) => (
            <TableRow key={index}>
              <TableCell colSpan={2}>
                <Alert severity="success" className={classes.alert}>
                  <Typography variant="body1">
                    {data.userOne} transferred ₹{data.amount} to {data.userTwo}
                  </Typography>
                </Alert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
