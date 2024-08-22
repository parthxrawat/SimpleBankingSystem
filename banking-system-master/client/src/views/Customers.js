import React, { useEffect, useState } from 'react';
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
import { styled } from '@mui/material/styles';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '40px',
  marginBottom: '40px',
  maxWidth: '1200px',
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '2rem',
  color: theme.palette.text.primary,
  fontWeight: 700,
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 700,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.primary,
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: theme.shadows[5],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  borderRadius: '20px',
  padding: '8px 16px',
}));

export default function Customers() {
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
    <StyledContainer>
      <StyledHeader>Customer List</StyledHeader>
      <StyledTableContainer component={Paper}>
        <StyledTable aria-label="customized table">
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
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {item.amount.toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/customers/${item._id}`} style={{ textDecoration: 'none' }}>
                    <StyledButton variant="contained" color="primary">
                      Transfer
                    </StyledButton>
                  </Link>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </StyledContainer>
  );
}
