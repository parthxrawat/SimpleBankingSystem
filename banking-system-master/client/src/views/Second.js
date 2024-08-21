import React, { useContext, useState } from "react";
import {
  Grid,
  Stepper,
  Step,
  Paper,
  makeStyles,
  StepLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  InputLabel,
  Radio,
  MenuItem,
  Select as MuiSelect,
  Button,
} from "@material-ui/core";
import { multiStepContext } from "../Context/StepContext";
import { Alert } from "@material-ui/lab";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Second() {
  const { userData, setUserData, setCurrentStep } = useContext(multiStepContext);
  const [error, setError] = useState(false);
  const { name, email, employment, accountType, amount } = userData;

  function filledDetails() {
    if (name && email && employment && accountType && amount) {
      setCurrentStep(3);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      {error && <Alert severity="error">Please fill all the details</Alert>}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            label="Account Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData["name"]}
            fullWidth
          />
          <TextField
            label="E-mail"
            type="email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            value={userData["email"]}
            fullWidth
          />
          <FormControl fullWidth margin="normal">
            <FormLabel>Employment Status</FormLabel>
            <MuiRadioGroup
              row
              onChange={(e) => setUserData({ ...userData, employment: e.target.value })}
              value={userData["employment"]}
            >
              <FormControlLabel value="Student" control={<Radio />} label="Student" />
              <FormControlLabel value="Employed" control={<Radio />} label="Employed" />
              <FormControlLabel value="UnEmployed" control={<Radio />} label="UnEmployed" />
              <FormControlLabel value="Retired" control={<Radio />} label="Retired" />
            </MuiRadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Account Type</InputLabel>
            <MuiSelect
              onChange={(e) => setUserData({ ...userData, accountType: e.target.value })}
              value={userData["accountType"]}
            >
              <MenuItem value="Current Account">Current Account</MenuItem>
              <MenuItem value="Savings Account">Savings Account</MenuItem>
            </MuiSelect>
          </FormControl>
          <TextField
            label="Deposit Amount"
            id="standard-start-adornment"
            onChange={(e) => setUserData({ ...userData, amount: e.target.value })}
            value={userData["amount"]}
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentStep(1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={filledDetails}
            style={{ marginLeft: '10px' }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
