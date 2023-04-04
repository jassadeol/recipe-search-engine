export const load = async() => {
    const response = await fetch ('http://localhost:5173/api/ingredients');
    const ing = await response.json();
    const list = ing.map((i) => {
        return `${i.name}, ${i.aisle}, ${i.consistency}, ${i.amount}`
    });
    return {list};
}