import * as React from 'react';
import Title from '../Title';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Competences from '../Competences';
import Experiences from './Experirences';
import { Link } from "react-router-dom";

export default function ProfilConsultant({ consultant }) {
  const consult = consultant;
  console.log("ProfilConsultant", consult)

  return (
    <>
      <button className="bg-[#00BB7E] text-white font-bold py-2 px-4 my-4 rounded-full">
        <Link to="/consultant/update">Modifier mon profil</Link>
      </button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Nom - Email - Metier
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {consult?.user?.firstName} {consult?.user?.lastName} - {consult?.user?.email} - {consult?.metier}
              </Typography>
              <Typography variant="h5" component="div">
                Secteur
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {consult?.secteur}
              </Typography>
              <Typography variant="h5" component="div" size="small">
                Disponiblité
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {consult?.disponibilite}
              </Typography>
              <Typography variant="body2">
                <Title>Parcours </Title>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Duree</TableCell>
                      <TableCell>Titre</TableCell>
                      <TableCell>Lieu</TableCell>
                      <TableCell align="left">Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {consult?.parcours?.map((row) => (
                      <TableRow key={row?.id}>
                        <TableCell>{row?.duree} ans</TableCell>
                        <TableCell>{row?.titre}</TableCell>
                        <TableCell>{row?.etablissement}</TableCell>
                        <TableCell align="left">{row?.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Competences data={consult?.competences} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Experiences data={consult?.experiences} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}