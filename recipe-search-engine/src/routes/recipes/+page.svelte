<script>
    export let data;
    const recipes = data.recipes;
</script>

<h1>{data.title}</h1>
<a href="/">Home</a>
{#each recipes as recipe}
<div>
    <h2>{recipe.title}</h2>
    <p> {recipe.description}</p>
    <img src = {recipe.image}  alt="food" > 
<hr/>
</div>
{/each}