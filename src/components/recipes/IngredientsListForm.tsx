import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FormValues } from '../../schemes/validationShema';

interface IngredientListProps {
    ingredients: string[];
    onRemoveIngredient: (index: number) => void;
    control: Control<FormValues>;
    errors: FieldErrors<FormValues>;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, onRemoveIngredient, control, errors }) => {
    return (
        <>
            {ingredients.map((_, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', position: 'relative' }}>
                    <Controller
                        name={`ingredients.${index}`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={`Ingredient ${index + 1}`}
                                variant="outlined"
                                fullWidth
                                error={!!errors.ingredients?.[index]}
                                helperText={errors.ingredients?.[index]?.message}
                                required
                            />
                        )}
                    />
                    <Button 
                        variant="outlined" 
                        onClick={() => onRemoveIngredient(index)} 
                        sx={{border:'none', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' }}
                    >
                        <DeleteForeverIcon />
                    </Button>
                </div>
            ))}
        </>
    );
};

export default IngredientList;
