import * as React from 'react';
import CardForm from './CardForm';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFormations, getUserById } from '../../utils/api';

export default function Formation() {

const [formations, setFormation] = useState([])
const [user, setUser] = useState()
const [loading, setLoading] = useState(true)
const userId = localStorage.getItem('currentUser');

useEffect(() => {
  getFormations().then((res)=>{
    setFormation(res)
    if(res.length !== 0){
      setLoading(false)
    }
  })

  getUserById(userId).then((res)=>{
    setUser(res?.data)
  })
}, []);

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
        {loading ? <h1>loading</h1> : formations.map((formation) => <CardForm title={formation.nom} description={formation.description} duree={formation.duree}  niveau={formation.niveau} contact={`mailto:test@example.com`} formationId={formation.id} userId={user?.id} />)}
      </Box>

    </>
  );
}