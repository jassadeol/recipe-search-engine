,<script>
    let i = '';
    export let data;
    const {list} = data;
</script>
<h1> Hello select an ingredient </h1>

<select bind:value={i}>
    <option value=""> Pick one </option>
    {#each list as i}
        <option value={i}> {i}  </option>
    {/each}
</select>