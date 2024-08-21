import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Container,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const useStyles = styled({
  tableContainer: {
    margin: '40px auto',
    width: '90%',
    maxWidth: '1200px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  table: {
    minWidth: 700,
  },
  button: {
    textTransform: 'capitalize',
  },
});

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '2rem',
  color: theme.palette.text.primary,
  fontWeight: 700,
}));

export default function Customers() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header>Customer List</Header>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Transfer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item._id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.amount.toLocaleString()}</StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/customers/${item._id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Transfer
                    </Button>
                  </Link>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
