import {json} from '@sveltejs/kit'

export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const title = "List of available recipes";
    const response = await fetch("http://localhost:4000/recipes");
    //const response = await fetch("https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429");
    const recipes = await response.json();
    return { 
        title,
        recipes
    };
};