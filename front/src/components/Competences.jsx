import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Competences({ data }) {
  console.log("Competences", data)
  return (
    <React.Fragment>
      <Title>Compétences</Title>
      {
        data?.map(comp => {
          return (
            <Typography component="p" variant="h6">
              { comp }
            </Typography>
          )
        })
      }
    </React.Fragment>
  );
}
