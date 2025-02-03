import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import recipeSchema, { FormValues } from '../../schemes/validationShema';
import IngredientList from './IngredientsListForm';
import Add from '@mui/icons-material/Add';

const RecipeForm = ({ handleFormSubmit }: { handleFormSubmit: Function }) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(recipeSchema),
    });
    const onSubmit = (data: FormValues) => {
        handleFormSubmit(data)
    };

    const addIngredient = () => {
        setValue('ingredients', [...(watch('ingredients') || []), '']);
    };

    const removeIngredient = (index: number) => {
        const newIngredients = [...(watch('ingredients') || [])];
        newIngredients.splice(index, 1);
        setValue('ingredients', newIngredients);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, overflowY: 'scroll', maxHeight: '80vh', p: 2, padding: '50px' }}>
            <Typography variant="h4" gutterBottom>Add a New Recipe</Typography>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Title"
                        variant="outlined"
                        fullWidth
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        sx={{ mb: 2 }}
                    />
                )}
            />
            <Controller name="description" control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        sx={{ mb: 2 }}
                    />
                )}
            />
            <Controller name="instructions" control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Instructions"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!errors.instructions}
                        helperText={errors.instructions?.message}
                        sx={{ mb: 2 }}
                    />
                )}
            />

            <Typography variant="h6" gutterBottom>
                Ingredients
            </Typography>
            <IngredientList
                ingredients={watch('ingredients') || []}
                onRemoveIngredient={removeIngredient}
                control={control}
                errors={errors}
            />
            <IconButton
                onClick={addIngredient}
                sx={{ mb: 2 }}
                color="primary"
            >
                <Add />
            </IconButton>
            <Button type="submit" variant="contained" color="primary" sx={{ marginBottom: '20px', display: 'block' }}>
                Submit Recipe
            </Button>
        </Box>
    );
};
export default RecipeForm;
