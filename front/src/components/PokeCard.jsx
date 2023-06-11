import { Grid, Card, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardbackImage from "../assets/image/Cardback.png";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 300,
  margin: "0 auto",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  "&.flipped": {
    transform: "rotateY(180deg)",
  },
}));

const StyledTypographie = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 300,
  margin: "0 auto",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  "&.flipped": {
    transform: "rotateY(180deg)",
  },
  // borderRadius: "30%",
  // border: "1px solid #000",
  // boxShadow: "0 0 10px #000",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // backgroundColor: "#fff",
  // "&:hover": {
  //     transform: "scale(1.1)",
  //     transition: "all 0.5s ease-in-out",
  //     cursor: "pointer",
  // },
}));


const PokeCard = (props) => {
  const { imageSrc, review, isCardFlipped } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isCardFlipped);
  }, [isCardFlipped]);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardFlip}
      >
        <CardMedia
          component="img"
          src={isFlipped ? CardbackImage : imageSrc}
          alt={isFlipped ? "Card Back Image" : "Card Image"}
        />
      </StyledCard>
      <StyledTypographie>
      <Typography variant="h1" align="left" color="text.secondary" paddingTop="50px" marginBottom="-60px">
        “
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.primary"
        paragraph
        style={{
          fontStyle: "italic",
          fontFamily: "Press Start 2P, cursive",
        }}
      >
        {review}
      </Typography>
      <Typography variant="h1" align="right" color="text.secondary" marginTop="-60px">
        “
      </Typography>
      </StyledTypographie>
    </Grid>
  );
};

PokeCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isCardFlipped: PropTypes.bool.isRequired,
};

export default PokeCard;
