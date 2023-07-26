<script lang="ts">
	import SomeImage from '$lib/images/temporary/p1.png';
	import { X } from 'lucide-svelte';
</script>

<section class="flex md:flex-row flex-col min-h-screen">
	<!-- products container  -->
	<div class="flex-1">
		<!-- single product  -->
		<div class="flex flex-row justify-between p-6 items-center text-red-500">
			<img src={SomeImage} alt="someimage" class="h-32 w-32" />
			<div>
				<h1>Sicilian</h1>
				<span>Large</span>
			</div>
			<h2>$79.90</h2>
			<span>
				<X />
			</span>
		</div>
	</div>
	<!-- Payment container  -->
	<div class="flex-1 h-1/2 md:h-auto px-6">
		<div class="flex flex-col space-y-3 text-red-500 w-full md:w-1/2 p-6">
			<div class="flex flex-row justify-between px-6 items-center">
				<span>Subtotal (3 items)</span>
				<span>$81.70</span>
			</div>
			<div class="flex flex-row justify-between px-6 items-center">
				<span>Service Cost</span>
				<span>$81.70</span>
			</div>
			<div class="flex flex-row justify-between px-6 items-center">
				<span>Delivery Cost</span>
				<span>$81.70</span>
			</div>
		</div>
		<hr class="border-red-500/30 my-3" />
		<div class="flex items-center justify-end">
			<button
				class=" bg-red-500 text-white p-2 rounded-md w-1/2 inline-flex items-center justify-center md:w-fit hover:bg-red-500/80 transition-all duration-300 ease-linear"
				>CHECKOUT</button
			>
		</div>
	</div>
</section>
