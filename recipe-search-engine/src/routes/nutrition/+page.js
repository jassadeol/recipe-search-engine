import {json} from '@sveltejs/kit'

export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const title = "Extended Ingredients and Nutrition";
    const response = await fetch("http://localhost:4000/extendedIngredients");
    //const response = await fetch("https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429");
    const ingredients = await response.json();
    return { 
        title,
        ingredients
    };
};