import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Copyright from '../Copyright';

const StyledFooter = styled('footer')({
  backgroundColor: '#f5f5f5',
  padding: '40px 0',
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <StyledTypography variant="h6" component="h3">
              Pour les Entreprises
            </StyledTypography>
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
            <StyledTypography variant="h6" component="h3">
              Pour les Freelances
            </StyledTypography>
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
            <StyledTypography variant="h6" component="h3">
              Ressources
            </StyledTypography>
            <ul>
              <li>
                <Link to="#">Article</Link>
              </li>
              <li>
                <Link to="#">Guides</Link>
              </li>
              <li>
                <Link to="#">Success Stories</Link>
              </li>
              <li>
                <Link to="#">Aide</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Box py={6} textAlign="center">
        <Divider />
        <Copyright />
      </Box>
    </StyledFooter>
  );
};

export default Footer;
