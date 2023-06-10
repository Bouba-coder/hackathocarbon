import React from "react";
import CardStat from "./CardStat";
import Grid from "@mui/material/Grid";
import Description from "./Description";

const HomeRH = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} textAlign="-webkit-center" marginTop="5%">
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Description
            title="Mes informations"
            firstName="Jean"
            lastName="Dupont"
            email="jean.dupont@gmail.com"
            arrived="01/01/2021"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat title="Nombre de consultants" number={50} arrived={2} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat
            title="Nombre d'entreprises partenaires"
            number={50} arrived={2}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat
            title="Nombre de formations proposées"
            number={50} arrived={2}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomeRH;
