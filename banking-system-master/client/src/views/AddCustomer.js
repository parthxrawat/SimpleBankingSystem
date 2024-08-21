import React, { useContext } from 'react';
import { Grid, Stepper, Step, Paper, StepLabel } from '@mui/material';
import { multiStepContext } from '../Context/StepContext';
import First from './First';
import Second from './Second';
import Third from './Third';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
    },
  },
  pageContent: {
    maxWidth: '600px', // Adjust the max width as needed
    margin: 'auto',
    padding: '20px',
  },
  stepper: {
    width: '100%',
    marginBottom: '20px',
  },
}));

export default function AddCustomer() {
  const { currentStep } = useContext(multiStepContext);
  const classes = useStyles();

  function showStep(step) {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      default:
        return null;
    }
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }} // Vertically center the content
    >
      <Paper elevation={6} className={classes.pageContent}>
        <form className={classes.root}>
          <Grid container justifyContent="center">
            <Stepper activeStep={currentStep - 1} orientation="horizontal" className={classes.stepper}>
              <Step>
                <StepLabel>Your Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Bank Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Confirmation</StepLabel>
              </Step>
            </Stepper>
          </Grid>
          {showStep(currentStep)}
        </form>
      </Paper>
    </Grid>
  );
}
