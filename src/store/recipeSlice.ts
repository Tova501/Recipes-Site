import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RecipeType from "../models/RecipeType";
import axios from "axios";
import Swal from 'sweetalert2'

export const fetchRecipes = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/api/recipes');
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response?.status || e.message);
        }
    }
);

export const addRecipe = createAsyncThunk('recipes/add',
    async (recipe: RecipeType, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3000/api/recipes',
                recipe,
                {
                    headers: {
                        'user-id': recipe.userId
                    }
                }
            );
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "המתכון נוסף בהצלחה",
                showConfirmButton: false,
                timer: 1500
            });
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response?.status || e.message);
        }
    }
);

export const editRecipe = createAsyncThunk('recipes/edit',
    async (recipe: RecipeType, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/recipes/${recipe.id}`, recipe, {
                headers: {
                    'user-id': recipe.userId
                }
            });
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response?.status || e.message);
        }
    }
);

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        list: [] as RecipeType[],
        loading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchRecipes.rejected, () => {
                
            })
            .addCase(addRecipe.fulfilled, (state, action) => {
                state.list.push(action.payload.recipe);
            })
            .addCase(addRecipe.rejected, (_, action) => {
                if (action.payload === 403) {
                    alert("You are not allowed to add a recipe");
                }
            })

            .addCase(editRecipe.fulfilled, (state, action) => {
                const index = state.list.findIndex(recipe => recipe.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload; 
                }
            })
            .addCase(editRecipe.rejected, (_, action) => {
                if (action.payload === 403) {
                    alert("You are not allowed to edit this recipe");
                }
            });
    }
});

export default recipesSlice;