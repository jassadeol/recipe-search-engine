<script>
    import {invalidateAll} from '$app/navigation';
    export let data;
    function refresh() {
        //invalidate('http://localhost:4000/recently-added');
        //invalidate('recipes:easy')??  
        invalidateAll();
    }
</script>

<h1> Recently added recipes </h1>
{#each data.recipes as recipe}
    <h2>{recipe.id} - {recipe.title}</h2>
{/each}

<button on:click={refresh}>Refresh</button>