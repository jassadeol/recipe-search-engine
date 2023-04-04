import {json} from '@sveltejs/kit';
export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    const mostLikedRecipeResponse = await fetch('http://localhost:4000/most-liked-recipe');
    //const easiestRecipeResponse = await fetch ('http://localhost:4000/easiest-recipe');
    //const seasonsFavouriteResponse = await fetch ('http://localhost:4000/seasons-favourite-recipe');

    const mostLikedRecipe = await mostLikedRecipeResponse.json();

    return {
        mostLikedRecipe//: mostLikedRecipeResponse.json(),
        //easiestRecipe: easiestRecipeResponse.json(), 
        //seasonsFavourite: seasonsFavouriteResponse.json()
    };
};