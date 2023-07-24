<script lang="ts">
	import OfferProduct from '$lib/images/offerProduct.png';
	import Countdown from './Countdown.svelte';
</script>

<section class="bg-black h-screen flex flex-col md:flex-row items-center px-10 md:">
	<!-- text container  -->
	<div class="flex-1 h-1/2 md:h-full flex items-center justify-center flex-col gap-y-5 text-white">
		<h1 class="text-5xl font-bold">Delicious burger and Fries</h1>
		<p class="text-justify text-lg">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veniam dolorum illum
			recusandae, voluptatem totam dolor aperiam quibusdam placeat qui officiis nesciunt repellat
			debitis iure quasi ipsam ea dicta corporis, saepe voluptatibus? Maiores mollitia magnam
			praesentium dolor a earum necessitatibus assumenda, molestias optio non, in vero distinctio,
			iure reiciendis aspernatur!
		</p>

		<Countdown />
	</div>
	<!-- Image container  -->
	<div class="flex-1 w-full h-1/2 md:h-full items-center justify-center flex">
		<img src={OfferProduct} alt="offerProduct" class="w-full object-cover object-center" />
	</div>
</section>
