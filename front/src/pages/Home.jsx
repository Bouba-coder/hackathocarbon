import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar/SearchBar';
import CardImage from '../assets/image/Jessica.jpg';
import CardImage2 from '../assets/image/Franklin.jpg';
import CardImage3 from '../assets/image/Han.png';
import CardImage4 from '../assets/image/Matthieu.png';
import CardImage5 from '../assets/image/Jerome.png';
import CardImage6 from '../assets/image/Sarah.png';
import PokeCard from '../components/PokeCard';
import './Home.css';
import { HomeFirstPage } from '../components/HomeFirstPage';
/*import imageHome from '../assets/image/imageHome.jpg'*/


const theme =  createTheme({
  palette: {
    primary: {
      main: '#282B2A',
    }
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeFirstPage />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
  <Container maxWidth="sm">
    <div className="container mt-20">
      <div className="texts">
        <Typography component="h1" variant="h4" align="left" color="text.primary" gutterBottom>
          Entreprise & Freelance étaient faits pour se rencontrer
        </Typography>
        <Typography variant="h5" align="left" color="#00BB7E" paragraph>
          Trouvez le talent parfait pour propulser vos projets
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Typography variant="h6" align="left" color="text.secondary" paragraph>
            Excellent
          </Typography>
          <Typography align="left" color="text.secondary" paragraph>
            4.3 sur 5
          </Typography>
          <Typography variant="h6" align="left" color="text.secondary" paragraph>
            Trustpilot
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
          <SearchBar placeholder='Essayez "Java", "Consultant Marketing"...' />
          <SearchBar placeholder='Lieu de la mission (ex: Paris, Lyon...)' />
          <Button variant="contained">Trouvez un freelance</Button>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            ou
          </Typography>
          <Button variant="outlined">Être Contacté</Button>
        </Stack>
      </div>
      <img
        /* src={imageHome} 
        alt="Le signe que vous recherchiez"
        className="image"*/
      />
    </div>
  </Container>
</Box>



{/* Espace CARDS Consultants */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={7}>
              <PokeCard
                isCardFlipped={true}
                imageSrc={CardImage}
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage2}
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                isCardFlipped={true}
                imageSrc={CardImage3}
                sx={{ maxWidth: 400 }}
              />
            {/* Ajoutez d'autres cartes ici pour plus de card les gars */}
          </Grid>
        </Container>
{/* Espace CARDS Consultants 2eme rangée */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={7}>
              <PokeCard
                imageSrc={CardImage4}
                title="Matthieu"
                description="Pokemon DevBack End"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                isCardFlipped={true}
                imageSrc={CardImage5}
                title="Jerome"
                description="Pokemon DevOps"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage6}
                title="Sarah"
                description="Pokemon DevFront End"
                sx={{ maxWidth: 400 }}
              />
            {/* Ajoutez d'autres cartes ici pour plus de card les gars */}
          </Grid>
        </Container>
      </main>


{/* Espace Footer */}
    <Container sx={{ py: 8 }} maxWidth="md">
      <Footer className="footer"/>
    </Container>
    </ThemeProvider>
  );
  
}
