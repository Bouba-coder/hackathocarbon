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

function createData(name, calories, fat, carbs, description) {
  return {
    name,
    calories,
    fat,
    carbs,
    description,
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
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledInfoCell>Description</StyledInfoCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.description}>
                    <StyledInfoCell component="th" scope="row">
                      {row.description}
                    </StyledInfoCell>
                  </TableRow>
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
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("Niveau", 159, 6.0, 24, "zezfzfezdfzedezfezzedezf"),
  createData("Secteur", 159, 6.0, 24, "zezfzfezdfzedezfezzedezf"),
  createData("Périmètre", 237, 9.0, 37, "zezfzfezdfzedezfezzedezf"),
  createData("eee", 262, 16.0, 24, "zezfzfezdfzedezfezzedezf"),
  createData("Salaire", 305, 3.7, 67, "zezfzfezdfzedezfezzedezf"),
  createData("Gingerbread", 356, 16.0, 49, "zezfzfezdfzedezfezzedezf"),
];

const ListConsultants = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell align="right">Durée</StyledTableCell>
            <StyledTableCell align="right">Niveau</StyledTableCell>
            <StyledTableCell align="right">Ajoutée le</StyledTableCell>
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
