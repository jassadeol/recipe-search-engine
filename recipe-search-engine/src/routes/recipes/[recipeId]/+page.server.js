import {redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
    const {fetch, params, url, route} = serverLoadEvent;
    console.log({route: route.id});
    console.log(params);
    const {recipeId} = params
    if (recipeId > 717 | recipeId < 714) {
        // throw error (404, {message: 'Recipe not found',
        //                     hint: 'Try another recipe'
        // });
        throw redirect (307, '/recipes')
    }
    const notification = "New Recipe Added"
    
    const title = 'Recipe Details';
    const response = await fetch (`http://localhost:4000/recipes/${recipeId}`);
    const recipe = await response.json();
    return {
        title, 
        recipe, 
        notification        
    };
};