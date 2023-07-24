<script>
	import FeaturedItems from './FeaturedItems.svelte';
	import Offer from './Offer.svelte';
	import Slider from './Slider.svelte';
	import Logo from '$lib/images/svelte-logo.svg';
	import Github from '$lib/images/github.svg';
</script>

<svelte:head>
	<title>Restaurent - by salman sheriff</title>
	<meta name="description" content="Restaurent Website" />
	<link rel="icon" href={Github} />
</svelte:head>

<section>
	<Slider />
	<FeaturedItems />
	<Offer />
</section>
