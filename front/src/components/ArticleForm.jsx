import React, {useState, useEffect} from "react";
import { TextField, Button } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { addArticle } from "../utils/api";




const AddArticleForm = (authorId) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [contentError, setContentError] = useState(false)

 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(title, content, category, authorId.authorId) 
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
                "authorId": authorId.authorId
              }
            addArticle(art)
            .then((res) => {
                console.log("res", res)
            })
        }

    }
    
    return (
        <React.Fragment>
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
    </React.Fragment>

    );
}
export default AddArticleForm;