<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../components/Button.svelte';
	import SliderImage1 from '../lib/images/slide1.png';
	import SliderImage2 from '../lib/images/slide2.png';
	import SliderImage3 from '../lib/images/slide3.jpg';

	type DataType = {
		id: number;
		title: string;
		image: string;
	};

	const data: DataType[] = [
		{
			id: 1,
			title: 'Always fresh & Always crispy and Always Hot',
			image: SliderImage1
		},
		{
			id: 2,
			title: 'Always fresh & Always crispy and Always Hot',
			image: SliderImage2
		},
		{
			id: 3,
			title: 'Always fresh & Always crispy and Always Hot',
			image: SliderImage3
		}
	];

	let currentSlide = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide++;

			if (currentSlide === data.length) {
				currentSlide = 0;
			}
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col md:flex-row h-[calc(100vh-6rem)]">
	<!-- Text container  -->
	<div
		class="bg-fuchsia-50 flex-1 h-1/2 md:h-full flex items-center justify-center flex-col gap-8 text-red-500 font-bold"
	>
		<h1 class="text-5xl text-center uppercase p-4">
			{data[currentSlide].title}
		</h1>
		<Button label="Order Now" />
	</div>

	<!-- Image Container  -->
	<div class="flex-1 h-1/2 md:h-full">
		<img
			src={data[currentSlide].image}
			alt="SliderImage"
			class="w-full h-full object-cover object-center"
		/>
	</div>
	<div class="fixed bottom-0 right-1/2">
		<button on:click={() => (currentSlide = 0)} class="border-2 border-red-500 rounded-full"
			>1</button
		>
		<button on:click={() => (currentSlide = 1)} class="border border-red-500 rounded-full">2</button
		>
		<button on:click={() => (currentSlide = 1)} class="border border-red-500 rounded-full">3</button
		>
	</div>
</div>
