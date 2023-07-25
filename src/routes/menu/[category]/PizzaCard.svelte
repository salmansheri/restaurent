<script lang="ts">
	import type { Product } from '../../../data';
	import FeaturedItems from '../../FeaturedItems.svelte';
	import Buttoni from './Buttoni.svelte';

	export let pizza: Product;
</script>

<a href={`/products/${pizza.id}`} class="border border-red-500 full p-6 group even:bg-fuchsia-50">
	<section>
		<!-- image container  -->
		{#if pizza.img}
			<div>
				<img src={pizza.img} alt={pizza.title} class="w-full h-full" />
			</div>
		{/if}
		<!-- text container  -->
		<div class="flex flex-row justify-between items-center">
			<h1 class="font-bold uppercase">{pizza.title}</h1>
			<h2>${pizza.price}</h2>
			<Buttoni styleClass="w-fit group-hover:block hidden">Add to Cart</Buttoni>
		</div>
		<div />
	</section>
</a>
