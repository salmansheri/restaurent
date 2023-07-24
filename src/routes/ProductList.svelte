<script lang="ts">
	import type { Product } from '../data';

	export let product: Product;
</script>

<div
	class="w-screen md:w-96 my-5 flex flex-col items-center justify-around px-6 cursor-pointer hover:bg-fuchsia-50 transition-all duration-300"
>
	<!-- Image container  -->
	<div
		class="flex-1 w-full flex items-center justify-center hover:rotate-[60deg] transition-all duration-500 ease-in"
	>
		<img
			src={product.img}
			alt="product 1"
			width={200}
			height={200}
			class="object-cover object-center"
		/>
	</div>
	<!-- text container  -->

	<div class="flex-1 flex flex-col gap-4">
		<h1 class="text-xl font-bold uppercase">{product.title}</h1>
		<p>{product.desc}</p>
		<span class="text-xl font-bold">$ {product.price}</span>
		<button class="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
	</div>
</div>
