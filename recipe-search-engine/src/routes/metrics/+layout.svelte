<script>
    export let data;  
</script>

<a href="/">Home</a>
<h1> Here's what people have said </h1>
<hr/>

<span> Most liked Recipe  - {data.mostLikedRecipe.id}</span>
<span> Easiest Recipe - {data.easiestRecipe.id}</span>
<span> Season's favourite - {data.seasonsFavourite.id}</span>
<slot/>

<style>
    span {
        margin-right: 30px;
        font-size: 20px;
    }
</style>