import express from 'express';
import { createRecipe , getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } from '../controller/recipe.controller.js';


const router = express.Router();


router.post ('/', createRecipe);

router.get ('/', getAllRecipes );

router.get ('/:id', getRecipeById);

router.put('/:id', updateRecipeById);

router.delete('/:id', deleteRecipeById);





export default router;