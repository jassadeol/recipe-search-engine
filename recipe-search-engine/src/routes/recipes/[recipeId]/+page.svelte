<script>
    export let data;
    const title = data.title; 
    const recipe = data.recipe;
</script>


<h1> {title}</h1>
<div>
    <h2>{recipe.id} - {recipe.title}</h2>
    <p> {recipe.description}</p>
</div>