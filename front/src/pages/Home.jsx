import * as React from 'react';
import { HomeFirstPage } from '../components/HomeFirstPage';
import { HomeOpinion } from '../components/HomeOpinion';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import CardContainer from "../components/CardContainer";
import DividerHome from "../components/DividerHome";
import { blueCarbon, greyCarbon, whiteCarbon } from "../components/Theme";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import NosPartenaire from "../components/NosPartenaires";

const Home = () => {
  return (
    <main>
      <HomeFirstPage />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box sx={{
          bgcolor: '#282B2A',
          pt: 10,
          pb: 6,
        }}>
          <Container>
              <SearchBar />
          </Container>
        </Box>
      </main>


      <DividerHome
        colorFirst={whiteCarbon}
        sizeFirst={"10%"}
        colorSecond={blueCarbon}
        sizeSecond={"30%"}
        colorThird={blueCarbon}
        sizeThird={"10%"}
        colorFourth={blueCarbon}
        sizeFourth={"10%"}
        colorFifth={greyCarbon}
        sizeFifth={"30%"}
      />
      <CardContainer />
      <DividerHome
        colorFirst={greyCarbon}
        sizeFirst={"30%"}
        colorSecond={blueCarbon}
        sizeSecond={"10%"}
        colorThird={blueCarbon}
        sizeThird={"30%"}
        colorFourth={blueCarbon}
        sizeFourth={"10%"}
        colorFifth={whiteCarbon}
        sizeFifth={"10%"}
      />
      <HomeOpinion />
      <Container sx={{ py: 8 }} maxWidth="md">
        <NosPartenaire />
      </Container>
      <Footer />
    </main>
  );
};

export default Home;
