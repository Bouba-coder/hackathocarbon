import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import CardContainer from "../components/CardContainer";
import DividerHome from "../components/DividerHome";
import { blueCarbon, greyCarbon, whiteCarbon } from "../components/Theme";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
      <main>
        <CssBaseline />
        <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <div className="container mt-20">
              <div className="texts">
                <Typography
                  component="h1"
                  variant="h4"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  Entreprise & Freelance étaient faits pour se rencontrer
                </Typography>
                <Typography variant="h5" align="left" color="#00BB7E" paragraph>
                  Trouvez le talent parfait pour propulser vos projets
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    paragraph
                  >
                    Excellent
                  </Typography>
                  <Typography align="left" color="text.secondary" paragraph>
                    4.3 sur 5
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    paragraph
                  >
                    Trustpilot
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <SearchBar placeholder='Essayez "Java", "Consultant Marketing"...' />
                  <SearchBar placeholder="Lieu de la mission (ex: Paris, Lyon...)" />
                  <Button variant="contained">Trouvez un freelance</Button>
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
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
        <DividerHome colorFirst={whiteCarbon} sizeFirst={"10%"} colorSecond={blueCarbon} sizeSecond={"50%"} colorThird={blueCarbon} sizeThird={"10%"} colorFourth={blueCarbon} sizeFourth={"10%"} colorFifth={greyCarbon} sizeFifth={"10%"} />
        <CardContainer />
        <DividerHome colorFirst={greyCarbon} sizeFirst={"10%"} colorSecond={blueCarbon} sizeSecond={"10%"} colorThird={blueCarbon} sizeThird={"50%"} colorFourth={blueCarbon} sizeFourth={"10%"} colorFifth={whiteCarbon} sizeFifth={"10%"} />
        <Footer />
      </main>
  );
};

export default Home;
