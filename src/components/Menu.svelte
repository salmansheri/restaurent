<script lang="ts">
	import Open from '../lib/images/open.png';
	import Close from '../lib/images/close.png';
	import { page } from '$app/stores';

	type LinksType = {
		id: number;
		title: string;
		href: string;
	};
	let pathname = $page.url.pathname;
	let open = false;
	let links: Array<LinksType> = [
		{
			id: 1,
			title: 'Home',
			href: '/'
		},
		{
			id: 2,
			title: 'Menu',
			href: '/menu'
		},
		{
			id: 3,
			title: 'Working Hours',
			href: '/working-hours'
		},
		{
			id: 4,
			title: 'Contact',
			href: '/contact'
		}
	];

	console.log(pathname);
</script>

<section class="relative md:hidden">
	{#if !open}
		<button class="w-fit" on:click={() => (open = true)}>
			<img src={Open} alt="open" class="h-5 w-5 cursor-pointer transition-all" />
		</button>
	{:else}
		<button on:click={() => (open = false)}>
			<img src={Close} alt="open" class="h-5 w-5 cursor-pointer transition-all" />
		</button>
	{/if}
	{#if open}
		<div
			class="absolute flex flex-col text-white right-0 bg-red-500 w-screen h-screen items-center justify-center space-y-3 transition-all"
		>
			{#each links as link}
				<a class="text-3xl" href={link.href}>{link.title}</a>
			{/each}
		</div>
	{/if}
</section>
