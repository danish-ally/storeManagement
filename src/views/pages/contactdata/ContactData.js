import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
// import { getBrokerSymbolList } from "../../../redux/submbolgenerator/actions";
import { getAllContactUs } from "../../../redux/contactUs/actions";
import { useSelector, useDispatch } from "react-redux";
import { Digital } from "react-activity";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const ContactData = (props) => {
  const contactUsState = useSelector((state) => state.contactUsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactUs());
  }, [dispatch]);

  console.log("COMPLETE RESPONSE DATA: ", contactUsState.data);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactUsState.data?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.email}
                </TableCell>
                <TableCell align="right">{item.firstName}</TableCell>
                <TableCell align="right">{item.LastName}</TableCell>
                <TableCell align="right">{item.subject}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactData;
