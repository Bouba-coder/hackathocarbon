import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import Paper from "@mui/material/Paper";

const CardStat = ({ title, number, arrived }) => {
  return (
    <React.Fragment>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 170,
            width: 400,
          }}
        >
          <Title>{title}</Title>
          <Typography component="p" variant="h4">
            {number}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            +{arrived} arrivés ce mois-ci
          </Typography>
        </Paper>
    </React.Fragment>
  );
};

CardStat.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  arrived: PropTypes.number.isRequired,
};

export default CardStat;
