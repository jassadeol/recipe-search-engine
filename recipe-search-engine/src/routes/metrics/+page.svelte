<script>
    export let data;
    //<span> Easiest Recipe - {data.easiestRecipe.id}</span>
//<span> Season's favourite - {data.seasonsFavourite.title}</span>
</script>

<h1> Here's what people have said </h1>


<span> Most liked Recipe - {data.mostLikedRecipe.title}</span>
<slot/>

<style>
    span {
        margin-right: 30px;
        font-size: 20px;
    }
</style>