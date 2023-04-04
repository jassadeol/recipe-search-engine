export const load = async(loadEvent) => {
    const {fetch, parent} = loadEvent;
    const parentData = await parent();
    const {username} = parentData
    const title = "Featured Recipes to Try";
    const response = await fetch ('http://localhost:4000/featured-recipes');
    const featuredRecipes = await response.json();
    return {
        username,
        title, 
        featuredRecipes 
    };

};