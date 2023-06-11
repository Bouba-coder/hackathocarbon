import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import CardbackImage from '../assets/image/Cardback.jpg';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  '&.flipped': {
    transform: 'rotateY(180deg)',
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
  const { imageSrc, isCardFlipped } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isCardFlipped);
  }, [isCardFlipped]);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
        <CardMedia
          component="img"
          src={isFlipped ? CardbackImage : imageSrc}
          alt={isFlipped ? 'Card Back Image' : 'Card Image'}
        />
      </StyledCard>
    </Grid>
  );
};

export default PokeCard;
