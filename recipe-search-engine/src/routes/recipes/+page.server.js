//import Recipe from './recipe.svelte'

//cannot use components - only JSON, data, map or set

//server load function is good for sensitive information (private API keys and database credentials)
export const load = async (serverLoadEvent) => {
    console.log('Load function in page.server.js');
    const {fetch} = serverLoadEvent;
    const title = 'List of available ingredients';
    const response = await fetch ('http://localhost:4000/recipes');
    const recipes = await response.json();
    return {
        title, 
        recipes, 
        //Component: Recipe
    };
};