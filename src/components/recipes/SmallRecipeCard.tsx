
import RecipeType from "../../models/RecipeType";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function RecipeSmallCard({ recipe, handleReadMore }: { recipe: RecipeType, handleReadMore: Function }) {
    return (
        <Card sx={{ width: 200, height: '280px', padding: '4px' }}>
            <CardHeader
                action={
                    <IconButton aria-label="Read more">
                        <ReadMoreIcon onClick={() => handleReadMore(recipe)} />
                    </IconButton>
                }
                title={recipe.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{
                    color: 'text.secondary',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    maxHeight: '5.5em',
                }}>
                    {recipe.description}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="100"
                image={recipe.imgUrl}
                alt={recipe.title}
            />

        </Card>
    );
}
