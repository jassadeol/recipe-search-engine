export async function GET() {
    const response = await fetch ('http://localhost:4000/extendedIngredients');
    const ingredients = await response.json(); 
    const detailIngredients = ingredients.map((ingredient) => {
        return {
            name: ingredient.name,
            aisle: ingredient.aisle,
            consistency: ingredient.consistency,
            amount: ingredient.amount

        };
    });
    return new Response (JSON.stringify(detailIngredients), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 

// export async function GET() {
//     const response = await fetch ('http://localhost:4000/recipes');
//     const ingredients = await response.json(); 
//     const detailIngredients = ingredients.map((ingredient) => {
//         return {
//             name: ingredient.name,
//             aisle: ingredient.description

//         };
//     });
//     return new Response(JSON.stringify(detailIngredients), {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// } 