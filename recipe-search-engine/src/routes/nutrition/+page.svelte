<script>
    export let data;
    const ingredients = data.ingredients;

    
</script>

<h1>{data.title}</h1>
<a href="/">Home</a>
{#each ingredients as ingredient}
<div>
    <h2>{ingredient.name}</h2>
    <p> Aisle: {ingredient.aisle}</p>
    <!--img src = {ingredient.image}  alt="food" > -->
<hr/>
</div>
{/each}