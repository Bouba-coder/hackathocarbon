import React, { useEffect, useState } from "react";
import CardStat from "./CardStat";
import Grid from "@mui/material/Grid";
import Description from "./Description";
import { authService, consultantService, entrepriseService, formationService } from "../../services";

const HomeRH = () => {
  const [user, setUser] = useState(null);
  const [consultants, setConsultants] = useState(null);
  const [entreprises, setEntreprises] = useState(null);
  const [formations, setFormations] = useState(null);

  useEffect(() => {
    authService.getCurrentUser().then((res) => {
      setUser(res);
    });

    consultantService.getAll().then((res) => {
      setConsultants(res.length);
    });

    entrepriseService.getAll().then((res) => {
      setEntreprises(res.length);
    });

    formationService.getAll().then((res) => {
      setFormations(res.length);
    });
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={2} textAlign="-webkit-center" marginTop="5%">
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Description
            title="Mes informations"
            firstName={user?.firstName}
            lastName={user?.lastName}
            email={user?.email}
            arrived={Date(user?.createdAt).slice(0, 15).toString()}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat title="Nombre de consultants" number={consultants} arrived={1} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat
            title="Nombre d'entreprises partenaires"
            number={entreprises} arrived={2}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CardStat
            title="Nombre de formations proposées"
            number={formations} arrived={4}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomeRH;
