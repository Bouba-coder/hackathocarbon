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
import CardImage from '../assets/image/Cardback.jpg';
import PokeCard from '../components/PokeCard';

// TODO remove, this demo shouldn't need to reset the theme.
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
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
  <Container maxWidth="sm">
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
    <img
      src="https://images.unsplash.com/photo-1546478848-6c4c7a0d4474"
      alt="Le signe que vous recherchiez"
      style={{ width: '100%', marginBottom: 16 }}
    />
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
      <SearchBar placeholder='Essayez "Java", "Consultant Marketing"...' />
      <SearchBar placeholder='Lieu de la mission (ex: Paris, Lyon...)' />
      <Button variant="contained">Trouvez un freelance</Button>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        ou
      </Typography>
      <Button variant="outlined">Être Contacté</Button>
    </Stack>
  </Container>
</Box>


{/* Espace CARDS Consultants */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={7}>
              <PokeCard
                imageSrc={CardImage}
                title="Jessica"
                description="Pokemon DevFront End"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage}
                title="Franklin"
                description="Pokemon DevOps"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage}
                title="Han"
                description="Pokemon DevFront End"
                sx={{ maxWidth: 400 }}
              />
            {/* Ajoutez d'autres cartes ici pour plus de card les gars */}
          </Grid>
        </Container>
{/* Espace CARDS Consultants 2eme rangée */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={7}>
              <PokeCard
                imageSrc={CardImage}
                title="Matthieu"
                description="Pokemon DevBack End"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage}
                title="Jerome"
                description="Pokemon DevOps"
                sx={{ maxWidth: 400 }}
              />
              <PokeCard
                imageSrc={CardImage}
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
