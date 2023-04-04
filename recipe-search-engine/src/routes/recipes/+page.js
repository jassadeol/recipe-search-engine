import {json} from '@sveltejs/kit'
import Recipe from './recipe.svelte'

export const load = async (loadEvent) => {
    console.log('Load function called in page.js');
    const notification = "Favourite recipes for Spring"
    const {fetch, data, parent} = loadEvent;
    const parentData = await parent();
    const {username} = parentData;
    const title = "List of available recipes";
    const response = await fetch("http://localhost:4000/recipes");
    //const response = await fetch("https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429");
    const recipes = await response.json();
    return { 
        ...data,
        Component: Recipe, 
        notification
    };
};