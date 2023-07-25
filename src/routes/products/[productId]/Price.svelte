<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { optionsType } from '../../../data';
	import Buttoni from '../../menu/[category]/Buttoni.svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	export let item: number;
	export let id: number;
	export let options: optionsType[];
	let quantity = 1;

	let totalPrice = item;
	let selectedOption = 0;

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
</script>

<div class="flex flex-col space-y-3">
	<h2 class="font-semibold text-lg">${item * options[selectedOption].additionalPrice}</h2>
	<!-- options container  -->
	<div class="flex flex-row space-x-2">
		<!-- @ts-ignore  -->
		{#each options as option}
			<button
				on:click={() => (size = option.title.toLowerCase())}
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
		<Buttoni>Add to Cart</Buttoni>
	</div>
</div>
