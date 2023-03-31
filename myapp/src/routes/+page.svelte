<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/front-page.jpg';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="recipe search engine demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/jpg" />
				<img src={welcome} alt="Gluten-free baked item" />
			</picture>
		</span>
		
	</h1>
</section>

<section>
	<h1>
		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: auto;
		height: auto;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 25em;
		height: 16em;
		top: 0;
		display: block;
	}
</style>
