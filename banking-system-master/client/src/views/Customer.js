import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Grid,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';
import './Customer.css';

export default function Customer() {
  const { id } = useParams();
  const [id2, setId2] = useState('');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { transferData, setTransferData, sendMoney } = useContext(multiStepContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const customerResponse = await axios.get(`http://localhost:3000/api/customers/${id}`);
        setData(customerResponse.data);

        const usersResponse = await axios.get('http://localhost:3000/api/customers');
        setUser(usersResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, [id]);

  const handleSendMoney = async () => {
    const transferData = {
      count: Number(amount),
      id,
      id2,
    };
    try {
      await axios.put('http://localhost:3000/api/customer/money', transferData);
      await axios.post('http://localhost:3000/api/transactions', transferData);
      navigate('/customers');
    } catch (error) {
      console.error("Error sending money", error);
    }
  };

  const isAmountInvalid = Number(amount) > data.amount;

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img
            src="../assets/images/sampleProfile.png"
            style={{ width: '70%' }}
            alt={data.DOB}
          />
        </div>
        <div className="box">
          <div className="row">
            <h4>
              {data.name}
              <h6>₹{data.amount}</h6>
            </h4>
            <span>
              {data.accountType} {data.gender}
            </span>
          </div>
          <div className="row">
            <FormControl fullWidth margin="normal">
              <InputLabel id="countrySelectLabel">Transfer to</InputLabel>
              <Select
                labelId="countrySelectLabel"
                id="countrySelect"
                onChange={(e) => setId2(e.target.value)}
                value={id2}
              >
                {user.map((code) =>
                  data.name !== code.name ? (
                    <MenuItem key={code._id} value={code._id}>
                      {code.name}
                    </MenuItem>
                  ) : null
                )}
              </Select>
            </FormControl>
            <TextField
              label="Transfer Amount"
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              error={isAmountInvalid}
              helperText={isAmountInvalid ? "The amount is greater than your balance" : " "}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={isAmountInvalid}
              onClick={handleSendMoney}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
