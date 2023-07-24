<script lang="ts">
	import type { Product } from '../../../data';
	import FeaturedItems from '../../FeaturedItems.svelte';
	import Buttoni from './Buttoni.svelte';

	export let pizza: Product;
</script>

<a href={`/product/${pizza.id}`} class="border border-red-500 full p-6">
	<section class="">
		<!-- image container  -->
		{#if pizza.img}
			<div>
				<img src={pizza.img} alt={pizza.title} class="w-full h-full" />
			</div>
		{/if}
		<!-- text container  -->
		<div>
			<h1>{pizza.title}</h1>
			<h2>{pizza.price}</h2>
			<Buttoni>Add to Cart</Buttoni>
		</div>
		<div />
	</section>
</a>
