import { Card, CardContent, CardHeader, CardMedia, List, ListItemText, Typography, ListItem, Divider } from "@mui/material";
import RecipeType from "../../models/RecipeType";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { red } from "@mui/material/colors";

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
    return (
        <Card sx={{ minHeight: '70vh', width: 'maxWidth', paddingBottom: '30px', boxShadow: 3, borderRadius: 2 }}>
            <CardHeader
                title={recipe.title}
                subheader={recipe.description}
                sx={{ backgroundColor: 'grey.200', borderBottom: '1px solid', borderColor: 'divider' }}
            />
            {recipe.imgUrl && recipe.imgUrl.length > 0 && (
                <CardMedia
                    component="img"
                    height="200" 
                    image={recipe.imgUrl}
                    alt={recipe.title}
                />
            )}
            <CardContent>
                <Typography variant="body2" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <KitchenIcon sx={{ marginRight: 1 , color:red[500]}} /> Instructions:
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>{recipe.instructions}</Typography>
                <Divider />
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: 2, display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ marginRight: 1, color:red[500] }} /> Ingredients:
                </Typography>
                <List sx={{ backgroundColor: '#e5e5e5', borderRadius: 1 }}>
                    {recipe.ingredients.map((i, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={i} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default RecipeCard;
