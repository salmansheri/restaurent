<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import type { optionsType } from '../../../data';
	import Buttoni from '../../menu/[category]/Buttoni.svelte';

	export let item: number;
	export let id: number;
	export let options: optionsType[];
	let quantity = 1;

	let totalPrice = item;
	let selectedOption = 0;

	console.log(selectedOption);

	const incrementQuantity = () => {
		quantity = quantity + 1;
	};

	const decrementQuantity = () => {
		if (quantity === 1) {
			return;
		}

		quantity -= 1;
	};

	let size = 'small';

	console.log(options[selectedOption].additionalPrice);

	$: absolutePrice = totalPrice + options[selectedOption].additionalPrice;

	const onClick = (title: string, price: number) => {
		size = title.toLowerCase();
		selectedOption = price;
	};

	const handleCart = () => {
		console.log({absolutePrice, quantity})
	}
</script>

<div class="flex flex-col space-y-3">
	<h2 class="font-semibold text-lg">${absolutePrice}</h2>
	<!-- options container  -->
	<div class="flex flex-row space-x-2">
		<!-- @ts-ignore  -->
		{#each options as option, i}
			<button
				on:click={() => onClick(option.title, i)}
				class={twMerge(
					'border  h-8 w-20 inline-flex items-center justify-center rounded-md transition-all duration-500 ease-linear',
					size === option.title.toLowerCase()
						? 'bg-red-500 text-white'
						: 'bg-fuchsia-100 border-red-500'
				)}>{option.title}{id}</button
			>
		{/each}
	</div>
	<!-- quantity and add button container  -->
	<div>
		<div class="flex flex-col">
			<span class="font-semibold text-lg">Quantity</span>
			<div class="flex flex-row items-center justify-center w-fit py-4">
				<button
					disabled={quantity === 1}
					on:click={decrementQuantity}
					class="disabled:cursor-not-allowed"
				>
					<ArrowLeft />
				</button>
				<span>{quantity}</span>
				<button on:click={incrementQuantity}>
					<ArrowRight />
				</button>
			</div>
		</div>
		<!-- Cart Button  -->
		<Buttoni
			onClick={handleCart}
		>Add to Cart</Buttoni>
	</div>
</div>
