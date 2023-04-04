export const load = async (loadEvent) => {
    const {fetch, depends} = loadEvent;
    depends('recipes:easy');
    const response = await fetch ('http://localhost:4000/recently-added');
    const recipes = await response.json();
    return {recipes};
};