import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { greyCarbon, whiteCarbon } from "../Theme";
import StyledTableCell from "../StyledTableCell";

const StyledInfoCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 17,
    backgroundColor: greyCarbon,
    color: whiteCarbon,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

function createData(name, calories, fat, carbs, protein, price, a, b) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
    a,
    b,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} minWidth="100%">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.calories}</StyledTableCell>
        <StyledTableCell align="right">{row.fat}</StyledTableCell>
        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Plus d'informations
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledInfoCell>Niveau</StyledInfoCell>
                    <StyledInfoCell>Secteur</StyledInfoCell>
                    <StyledInfoCell>Périmètre</StyledInfoCell>
                    <StyledInfoCell>Entreprise</StyledInfoCell>
                    <StyledInfoCell>Salaire</StyledInfoCell>
                    <StyledInfoCell>Arrivé(e) le</StyledInfoCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <StyledInfoCell component="th" scope="row">
                        {historyRow.date}
                      </StyledInfoCell>
                      <StyledInfoCell>{historyRow.customerId}</StyledInfoCell>
                      <StyledInfoCell align="right">
                        {historyRow.amount}
                      </StyledInfoCell>
                      <StyledInfoCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </StyledInfoCell>
                      <StyledInfoCell align="right">
                        {historyRow.a}
                      </StyledInfoCell>
                      <StyledInfoCell align="right">
                        {historyRow.b}
                      </StyledInfoCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Niveau", 159, 6.0, 24, 4.0, 3.99, "a", "b"),
  createData("Secteur", 159, 6.0, 24, 4.0, 3.99, "a", "b"),
  createData("Périmètre", 237, 9.0, 37, 4.3, 4.99, "a", "b"),
  createData("eee", 262, 16.0, 24, 6.0, 3.79, "a", "b"),
  createData("Salaire", 305, 3.7, 67, 4.3, 2.5, "a", "b"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5, "a", "b"),
];

const ListConsultants = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">Nom</StyledTableCell>
            <StyledTableCell align="right">Prénom</StyledTableCell>
            <StyledTableCell align="right">Disponibilité</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListConsultants;
