<script lang="ts">
	import { singleProduct } from '../../../data';
	import Price from './Price.svelte';
</script>

<section
	class="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-center my-20 text-red-500 md:flex-row min-h-[cal(100vh-10rem)]"
>
	<!-- image container  -->
	<div class="w-full h-1/2 md:h-full overflow-hidden rounded-3xl shadow-2xl">
		<img
			src="https://images.unsplash.com/photo-1690233644210-b4687715a6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
			alt="singleproductimage"
			class="w-full h-full object-cover object-center rounded-3xl hover:scale-110 transition-all duration-300 ease-linear"
		/>
	</div>
	<!-- Text Container  -->
	<div class="p-6 flex-col space-y-5">
		<h1 class="text-3xl font-bold">{singleProduct.title}</h1>
		<p class="text-base font-medium text-justify">{singleProduct.desc}</p>
		<Price item={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
	</div>
</section>
