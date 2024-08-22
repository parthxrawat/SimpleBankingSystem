import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { multiStepContext } from "../Context/StepContext";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    margin: '0 10px',
  },
});

export default function Third() {
  const { userData, setCurrentStep, submitData } = useContext(multiStepContext);
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="personal information table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell align="right">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries({
                  'First Name': userData.firstName,
                  'Last Name': userData.lastName,
                  'Address': userData.Address,
                  'Gender': userData.gender,
                  'Phone Number': userData.Phone,
                  'DOB': userData.DOB
                }).map(([category, detail]) => (
                  <TableRow key={category}>
                    <TableCell component="th" scope="row">
                      {category}
                    </TableCell>
                    <TableCell align="right">{detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="account information table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell align="right">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries({
                  'Account Name': userData.name,
                  'Account Type': userData.accountType,
                  'E-mail': userData.email,
                  'Deposit Amount': userData.amount,
                  'Employment Status': userData.employment
                }).map(([category, detail]) => (
                  <TableRow key={category}>
                    <TableCell component="th" scope="row">
                      {category}
                    </TableCell>
                    <TableCell align="right">{detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setCurrentStep(2)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={submitData}
          >
            {console.log(submitData)}
            Submit
          </Button>
        </div>
      </Grid>
    </div>
  );
}
