<script>
    import {page} from '$app/stores'
    export let data;
    const {username} = data;
</script>


<div> Welcome, {username}</div>
<slot/>

<p> {$page.data.notification}</p>