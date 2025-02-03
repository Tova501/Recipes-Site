import {  useEffect, useState } from "react";
import RecipeType from "../../models/RecipeType"
import { fetchRecipes } from "../../store/recipeSlice";
import { AppDispatch, RootStore } from "../../store/store"
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import RecipeSmallCard from "./SmallRecipeCard";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
    const recipes = useSelector((store: RootStore) => store.list);
    const isLoading = useSelector((store: RootStore) => store.loading);
    const dispatch = useDispatch<AppDispatch>();
    const [displaydRecipe, setDisplaydRecipe] = useState<RecipeType | null>(null);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const handleReadMore = (recipe: RecipeType) => {
        setDisplaydRecipe(recipe)
    }

    return (
        <>
            {isLoading && <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>}
            <div className="main">
                <Container sx={{maxHeight: '100vh',overflowY: 'scroll', width: '50%', display: 'flex', flexDirection:'row', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {recipes.map(r => (<RecipeSmallCard key={r.id} recipe={r} handleReadMore={handleReadMore} />))}
                </Container>
                <Container sx={{alignSelf:'center', width: '50%', overflowY: 'scroll', maxHeight:'85vh', marginBottom:'30px'}} >
                    {displaydRecipe ?
                        <RecipeCard recipe={displaydRecipe} /> :
                        <Typography>No recipe choosen</Typography>
                    }
                </Container >
            </div>
        </>
    );
};

export default Recipes