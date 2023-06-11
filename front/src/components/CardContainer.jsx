import PokeCard from "./PokeCard";
import CardImage1 from "../assets/image/Han.png";
import CardImage2 from "../assets/image/Jerome.png";
import CardImage3 from "../assets/image/Sarah.png";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { themeCardContainer } from "./Theme";
import TitleHome from "./TitleHome";

const CardContainer = () => {
  const pokemons = [
    {
      id: 1,
      imageSrc: CardImage1,
      review:
        "Carbon est le lieu idéal pour développer mes compétences en backend, grâce à une équipe unie, une culture d'apprentissage dynamique et des projets passionnants qui repoussent les limites technologiques.",
      isCardFlipped: true,
    },
    {
      id: 2,
      imageSrc: CardImage2,
      review:
        "Carbon est une communauté d'experts passionnés et compétents, où l'apprentissage continu et l'innovation sont au cœur de notre culture d'entreprise.",
      isCardFlipped: false,
    },
    {
      id: 3,
      imageSrc: CardImage3,
      review:
        "Chez Carbon, en tant que consultante en développement backend, je suis fière de faire partie d'une équipe hautement qualifiée qui met son expertise au service des entreprises.",
      isCardFlipped: true,
    },
  ];

  return (
    <ThemeProvider theme={themeCardContainer}>
      <Box
        paddingTop="100px"
        display="flex"
        flexDirection="column"
        backgroundColor={themeCardContainer.palette.background.default}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <TitleHome
            title="Nos consultants témoignent"
            variant="h4"
            align="center"
            color={themeCardContainer.palette.text.primary}
          />
        </Box>
        <Box
          paddingTop="100px"
          paddingBottom="100px"
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          backgroundColor={themeCardContainer.palette.background.default}
        >
          {pokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              imageSrc={pokemon.imageSrc}
              review={pokemon.review}
              isCardFlipped={pokemon.isCardFlipped}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CardContainer;
