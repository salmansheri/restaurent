<script lang="ts">
	import { pizzas } from '../../../data';
	import type { PageData } from './$types';
	import PizzaCard from './PizzaCard.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.category}</title>
	<meta name="description" />
</svelte:head>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-red-500">
	{#each pizzas as pizza}
		<PizzaCard {pizza} />
	{/each}
</section>
