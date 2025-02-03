import { Card, CardContent, CardHeader, CardMedia, List, ListItemText, Typography, ListItem } from "@mui/material";
import RecipeType from "../../models/RecipeType"

const RecipeCard = ({recipe}: {recipe:RecipeType}) => {
    return (<>
               <Card sx={{ minHeight: '70vh', width:'maxWidth',  paddingBottom: '30px'}}>
            <CardHeader
                title={recipe.title}
                subheader={recipe.description}
            />
           { recipe.imgUrl && recipe.imgUrl.length>0 &&
            <CardMedia
                component="img"
                height="100"
                image={recipe.imgUrl}
                alt={recipe.title}
            />}
            <CardContent>
                <Typography variant="body2" className="p-text" sx={{fontWeight:'bold'}}>Instructions: </Typography>
                <Typography className="p-text"> {recipe.instructions}</Typography>
                <List sx={{backgroundColor: '#e5e5e5'}} >
                    {
                        recipe.ingredients.map(i=>(
                            <ListItem>
                                <ListItemText primary={i}/>
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    </>)
}

export default RecipeCard;