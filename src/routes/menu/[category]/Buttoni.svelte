<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let styleClass: string = '';
	export let onClick: () => void = () => {};
	export let secondary: boolean = false;
	export let disabled: boolean = false;

	
</script>

<button
	on:click={onClick}
	{disabled}
	class={twMerge(
		'px-4 py-2 inline-flex items-center justify-center rounded-md hover:bg-opacity-80 transition-all ease-in',
		secondary
			? 'bg-transparent border-2 border-red-500 text-black'
			: 'bg-red-500 border-none text-white',
		styleClass
	)}
>
	<slot />
</button>
