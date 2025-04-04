import express from 'express';
import { createRecipe , getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } from '../controller/recipe.controller.js';


const router = express.Router();


router.post ('/', createRecipe);

router.get ('/', getAllRecipes );

router.get ('/_id', getRecipeById);

router.put('/_id', updateRecipeById);

router.delete('/_id', deleteRecipeById);





export default router;
