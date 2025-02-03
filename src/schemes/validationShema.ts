import * as Yup from 'yup';
import { InferType } from 'yup';

const recipeSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    instructions: Yup.string().required('Instructions are required'),
    ingredients: Yup.array().of(Yup.string().required('Ingredient is required')).min(1, 'At least one ingredient is required'),
    imgUrl: Yup.string()
});

export default recipeSchema

export type FormValues = InferType<typeof recipeSchema>;
