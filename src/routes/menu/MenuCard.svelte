<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Menu } from '../../data';

	export let item: Menu;

	$: divImage = item.img;
	$: color = item.color;
	$: text = item.color === 'black' ? 'white' : 'red';
</script>

<div class=" h-1/3 bg-cover p-8" style="background-image: url({divImage}); color: {color}">
	<h1>{item.title}</h1>
	<p>{item.desc}</p>
	<button
		class={twMerge(`hidden lg:block px-4 py-2 rounded-md hover:bg-opacity-80`)}
		style="background-color: {color}; color: {text}"
	>
		Explore
	</button>
</div>
