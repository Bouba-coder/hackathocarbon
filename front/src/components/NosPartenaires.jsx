import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import cardImg from '../assets/image/logoipsum-221.svg'
import cardImg2 from '../assets/image/logoipsum-234.svg'
import cardImg3 from '../assets/image/logoipsum-241.svg'
import cardImg4 from '../assets/image/logoipsum-278.svg'
import cardImg5 from '../assets/image/logoipsum-282.svg'
import cardImg6 from '../assets/image/logoipsum-290.svg'
import cardImg7 from '../assets/image/logoipsum-291.svg'
import cardImg8 from '../assets/image/logoipsum-294.svg'

export default function NosPartenaire() {
  return (
    <ImageList 
    sx={{ 
    height: 450,
    justifyContent:"space-around"
    
    }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem 
        sx={{
            width: 164,
            height: 164,
            margin: 1,
            borderRadius: "50%",
            border: "1px solid #000",
            boxShadow: "0 0 10px #000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.5s ease-in-out",
                cursor: "pointer",
            },
        }}
        key={item.img}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
        img: cardImg,
        title: 'Breakfast',
    },
    {
        img: cardImg2,
        title: 'Burger',
    },
    {
        img: cardImg3,
        title: 'Camera',
    },
    {
        img: cardImg4,
        title: 'Coffee',
    },
    {
        img: cardImg5,
        title: 'Hats',
    },
    {
        img: cardImg6,
        title: 'Honey',
    },
    {
        img: cardImg7,
        title: 'Basketball',
    },
    {
        img: cardImg8,
        title: 'Fern',
    },
];