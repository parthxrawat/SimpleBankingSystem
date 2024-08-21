import React, { useContext, useState } from 'react';
import {
  Grid,
  Stepper,
  Step,
  Paper,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  Button,
  Alert,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';

export default function First() {
  const { userData, setUserData, setCurrentStep } = useContext(multiStepContext);
  const [error, setError] = useState(false);
  const { firstName, lastName, Phone, DOB, gender, Address } = userData;

  function filledDetails() {
    if (firstName && lastName && Phone && DOB && gender && Address) {
      setCurrentStep(2);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      {error && <Alert severity="error">Please fill all the details</Alert>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            color="secondary"
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            value={firstName}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Address"
            color="secondary"
            onChange={(e) => setUserData({ ...userData, Address: e.target.value })}
            value={Address}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            onChange={(e) => setUserData({ ...userData, Phone: e.target.value })}
            value={Phone}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            color="secondary"
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            value={lastName}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
              value={gender}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            onChange={(e) => setUserData({ ...userData, DOB: e.target.value })}
            value={DOB}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={filledDetails}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
