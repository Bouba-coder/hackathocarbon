import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Experiences({ data }) {
  const experiences = data
  console.log("Experiences-consultant", experiences)
  return (
    <React.Fragment>
      <Title>Experiences </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Duree</TableCell>
            <TableCell>Titre</TableCell>
            <TableCell>Entreprise</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experiences?.map((row) => (
            <TableRow key={row?.id}>
              <TableCell>{row?.duree} mois</TableCell>
              <TableCell>{row?.titre}</TableCell>
              <TableCell>{row?.entreprise}</TableCell>
              <TableCell align="right">{row?.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
