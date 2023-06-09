import * as React from 'react';
import CardForm from './CardForm';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFormations } from '../../utils/api';

export default function Formation() {

const [formations, setFormation] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
  getFormations().then((res)=>{
    console.log("get formations +++++ by id", res)
    setFormation(res)
    if(res.length !== 0){
      setLoading(false)
    }
  })
}, []);
console.log("loading", loading)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 400,
            height: 400,
          },
        }}
      >
        {loading ? <h1>loading</h1> : formations.map((formation) => <CardForm title={formation.nom} description={formation.description} duree={formation.duree}  niveau={formation.niveau} contact={`mailto:test@example.com`} />)}
      </Box>

    </>
  );
}