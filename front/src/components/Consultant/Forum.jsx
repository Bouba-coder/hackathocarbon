import { useState, useEffect } from "react";
import { addCommentaire, getArticles, getCommentaires } from "../../utils/api";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import Badge from '@mui/material/Badge';
import { InputLabel, Container, TextField, Button, Select, MenuItem, FilledInput, FormControl  } from "@mui/material";
import Grid from '@mui/material/Grid';
import AddArticleForm from "../ArticleForm";
import { Box } from "@mui/system";
import { addArticle } from "../../utils/api";

const Forum = () => {
  const [articles, setArticle] = useState([])
  const [commentaire, setCommentaire] = useState([]);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)
  const [authorId, setAuthorId] = useState(1);
  const [isLoad, setIsload] = useState()

  useEffect(() => {
    getArticles().then((res) => {
      //console.log("ressss", res)
      setArticle(res);
    });
    getCommentaires().then((res) => {
      //console.log("ressss", res)
      setCommentaire(res);
    });

  }, [handleSubmit, isLoad]);


  //console.log('datatatttatat', commentaire);
    //add article
    function handleSubmit(event) {
      event.preventDefault();
      setIsload(1)
      console.log(title, content, category, authorId) 
      if(title === '' || category == '') {
          setTitleError(true)
          setContentError(true)
      } else {
          setTitleError(false)
          setContentError(false)
          const art = {
              "title" : title,
              "content": content,
              "category": category,
              "authorId": authorId
            }
          addArticle(art)
          .then((res) => {
              console.log("res", res)
          })
      }

  }

    
  
  return (
    <Container 
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 2,
    }}
    >
      <Grid container spacing={2} >

      <Grid item xs={10} md={6}> 
      {
          articles.map((article) => {
            //console.log("article", article)
            return (
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div">
                  <Badge color="primary">
                      <ArticleIcon/>
                  </Badge>
                  { article.category }
                </ListSubheader>
              }
              >
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={"Titre : " + article.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        
                      </Typography>
                      {article.content}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Ajout de commenter</InputLabel>
                <FilledInput
                  id="commits"
                  onClick={(e)=>{
                    e.preventDefault();
                    const commentaire = {
                      content: e.target.value,
                      articleId: article.id,
                      authorId: article.authorId
                    }
                    //console.log("add commentaire", commentaire)
                    addCommentaire(commentaire);
                    setIsload(2)
                  }}
                />
              </FormControl>
              <Divider variant="inset" component="li" />
              {
                commentaire.map((comment) => {
                  if(comment?.articleId === article?.id){
                  return (
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={"Commentaire : " + comment.content}
                      />
                    </ListItem>
                  )
                }
                })
              
              }
            </List>
            )
          }) 
        }
        </Grid>
              <Grid item xs={12} md={6}>
              <form autoComplete="off" onSubmit={handleSubmit}>
            <h2> Add new article </h2>
            <TextField 
                label="title"
                onChange={e => setTitle(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={title}
                error={titleError}
                />
                <TextField 
                label="content"
                onChange={e => setContent(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={content}
                error={contentError}
                fullWidth
                sx={{mb: 3}}
                />
                <Box sx={{ minWidth: 220 }}>
                <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={category}
                        label="Category"
                        onChange={e => setCategory(e.target.value)}
                        >
                        <MenuItem value="Technologie">Technologie</MenuItem>
                        <MenuItem value="Banque">Banque</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="Actualite">Actualite</MenuItem>
                    </Select>
                </Box>
                <Button variant="outlined" color="secondary" type="submit">Ajout de l'article</Button>
             
        </form>
              </Grid>
      </Grid>


    </Container>
  )
};

export default Forum;


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Remplacez l'URL avec votre propre URL du serveur Nest.js

// const Forum = () => {
//   const [message, setMessage] = useState('');
//   const [receivedMessage, setReceivedMessage] = useState('');
  

//   useEffect(() => {
//     socket.on('message', (message) => {
//       setReceivedMessage(message);
//     });
//   }, []);

//   const sendMessage = () => {
//     console.log('message', message)
//     localStorage.setItem({"message": message, "id": socket.id});
//     socket.emit('message', message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <h1>Forum</h1>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       <div>reponse {receivedMessage}</div>
//     </div>
//   );
// };

// export default Forum;
