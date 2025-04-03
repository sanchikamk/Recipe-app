import mongoose from 'mongoose';


const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: [
        {
            type: String,
            required: true,
        },
    ],
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: Number, // in minutes
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;

