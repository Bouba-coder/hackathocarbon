import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import Paper from "@mui/material/Paper";

const Description = ({ title, firstName, lastName, email, arrived }) => {
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
            {firstName} {lastName}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {email}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            Arrivé le {arrived}
          </Typography>
        </Paper>
    </React.Fragment>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  arrived: PropTypes.string.isRequired,
};

export default Description;
