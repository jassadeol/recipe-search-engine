<script>
    export let data;
    const username = data.username;
    const title = data.title;
    const featuredRecipes = data.featuredRecipes;     
</script>

<slot/>

<h2> {title} for {username}</h2>

{#each featuredRecipes as recipe}
    <div class="recipe-item">
        <h2> {recipe.title}</h2>
        <p> {recipe.description}</p>
    </div>
{/each}


<style>
    .recipe-item{
        display: inline-block;
        width: 200px;
        margin: 10px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>