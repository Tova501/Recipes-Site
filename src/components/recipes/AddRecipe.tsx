import { useDispatch } from "react-redux";
import RecipeType from "../../models/RecipeType";
import { FormValues } from "../../schemes/validationShema"
import { addRecipe } from "../../store/recipeSlice";
import RecipeForm from "./RecipeForm";
import { AppDispatch } from "../../store/store";
import { useContext } from "react";
import { UserContext } from "../../store/userReducer";
import { useNavigate } from "react-router";

const AddRecipe = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handleAddSumbition = (data: FormValues) => {
        const recipe: RecipeType = { id: 0, ...data, userId: user.id, ingredients: data.ingredients ?? ([] as string[]) };
        dispatch(addRecipe(recipe));
        navigate('/');
    };
    return (<>
        <RecipeForm handleFormSubmit={handleAddSumbition} />
    </>)
}

export default AddRecipe