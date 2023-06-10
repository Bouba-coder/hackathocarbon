import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from "../Copyright";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
              Pour les Entreprises
            </Typography>
            <ul>
              <li>
                <Link to="#">Pourquoi Carbon</Link>
              </li>
              <li>
                <Link to="#">Marketplace de Freelances</Link>
              </li>
              <li>
                <Link to="#">Solution de gestion des freelances</Link>
              </li>
              <li>
                <Link to="#">Forum</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
            Pour les Freelances
            </Typography>
            <ul>
              <li>
                <Link to="#">Pourquoi Carbon</Link>
              </li>
              <li>
                <Link to="#">Communauté & Programme</Link>
              </li>
              <li>
                <Link to="#">Nos Super Formations</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Nos Partenaires</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
              Ressources
            </Typography>
            <ul>
              <li>
                <Link to="#">Article</Link>
              </li>
              <li>
                <Link to="#">Guides</Link>
              </li>
              <li>
                <Link to="#">Succes Stories</Link>
              </li>
              <li>
                <Link to="#">Aide</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 10 }} maxWidth="md">
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;