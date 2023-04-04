<script>
    //import Recipe from './recipe.svelte'
    export let data;
    const username = data.username;
    const recipes = data.recipes;
    const Component = data.Component;
</script>

<h1>{data.title} for {username}</h1>
<a href="/">Home</a>
{#each recipes as recipe}
<div>
    <Component {recipe}/>
    <!--<Recipe {recipe}/> -->
</div>
{/each}