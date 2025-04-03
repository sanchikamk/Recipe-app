import Recipe from "../models/recipe.schema.js";

// create and save a new recipe
export const createRecipe = async (req, res) => {
  try {
    // const {name, ingredients, instructions, prepTime, servings} = req.body;
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe added successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ messaage: "All recipes", data: recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a recipe by id
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    } else {
      res.status(200).json({ message: "Recipe found", data: recipe });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a recipe by id

export const updateRecipeById = async (req, res) => {
  try {
    
    console.log(req.body)
    const {name, ingredients, instructions, prepTime, servings } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedRecipe.matchedCount === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    } else {
      res
        .status(200)
        .json({ message: "Recipe updated successfully", data: updatedRecipe });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


export const deleteRecipeById = async (req,res) => {
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deleteRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        } else {
            res.status(200).json({ message: "Recipe deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};