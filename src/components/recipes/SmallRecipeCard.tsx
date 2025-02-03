import RecipeType from "../../models/RecipeType";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { red } from '@mui/material/colors';

export default function RecipeSmallCard({ recipe, handleReadMore }: { recipe: RecipeType, handleReadMore: Function }) {
    return (
        <Card sx={{ 
            width: 200, 
            padding: '4px', 
            boxShadow: 3, 
            borderRadius: 2,
            '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.2s',
            }
        }}>
            <CardHeader
                action={
                    <IconButton aria-label="Read more" sx={{ color: red[500] }}>
                        <ReadMoreIcon onClick={() => handleReadMore(recipe)} />
                    </IconButton>
                }
                title={recipe.title}
                titleTypographyProps={{ variant: 'h6', color: 'primary.main' }}
                sx={{ backgroundColor: 'grey.200', borderBottom: '1px solid', borderColor: 'divider' }}
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
        </Card>
    );
}
