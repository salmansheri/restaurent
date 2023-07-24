<script lang="ts">
	import type { Product } from '../data';

	import ProductList from './ProductList.svelte';
	import { featuredProducts } from '../data';
</script>

<section class="w-screen overflow-x-scroll my-10 md:px-10">
	<!-- wrapper  -->
	<div class="w-max flex gap-10">
		{#each featuredProducts as item}
			<ProductList product={item} />
		{/each}
	</div>
</section>
