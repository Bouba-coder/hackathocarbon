import * as React from "react";
import { useEffect, useState} from "react";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { subscribFormation } from "../../utils/api";


const CardForm = ({ title, description, duree, niveau, contact, userId, formationId }) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        if(niveau == "Expert"){
            setValue(5)
        } 
        if(niveau == "Senior"){
            setValue(3)
        }
        if(niveau == "Junior"){
            setValue(2)
        }
    }, []);

    const subscribeToFormation = () => {
        //console.log('userId --- FormationId ', userId + formationId)
        subscribFormation(formationId, userId).then((res)=>{
            //console.log("subscribeFormation", res)
        })
    }

  return (
    <React.Fragment>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} - Duree : { duree } Jours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography component="legend">Niveau : {niveau}</Typography>
                        <Rating
                        name="simple-controlled"
                        value={value}
                        readOnly />

            </CardContent>
                <CardActions>              
                <Button size="small" href={contact}>Contacter</Button>
                <form autoComplete="off" onSubmit={subscribeToFormation()}>
                    <Button variant="outlined" color="secondary" type="submit">Postuler</Button>
                </form>
                </CardActions>
            </CardActionArea>
        </Card>
    </React.Fragment>
  );
};

CardForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duree: PropTypes.string.isRequired,
};

export default CardForm;
