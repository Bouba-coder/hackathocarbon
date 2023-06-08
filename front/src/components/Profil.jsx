import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProfilConsultant(props) {
  const consult = props.consultant;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Nom - Email - Metier
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        { consult?.user?.firstName } { consult?.user?.lastName } - { consult?.user?.email } - { consult.metier }
        </Typography>
        <Typography variant="h5" component="div">
          Secteur 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            { consult.secteur }
        </Typography>
        <Typography variant="h5" component="div">
          Parcours 
        </Typography>
        <Typography variant="body2">
          {
            consult?.parcours?.map(res => {
                return (
                    <div>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        { res }
                    </Typography>
                    </div>
                )
            })
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Disponiblité : { props.disponibilite }</Button>
      </CardActions>
    </Card>
  );
}