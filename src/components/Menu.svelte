<script lang="ts">
	import Close from '../lib/images/close.png';
	import Open from '../lib/images/open.png';
	import CartIcon from './CartIcon.svelte';

	type LinksType = {
		id: number;
		title: string;
		href: string;
	};
	
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

	let user = false;
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
			class="absolute flex flex-col text-white right-0 bg-red-500 w-screen z-50 h-[calc(100vh-6rem)] items-center justify-center space-y-3 transition-all"
		>
			{#each links as link}
				<a class="text-3xl" href={link.href}>{link.title}</a>
			{/each}

			{#if !user}
				<button class="text-3xl">Login</button>
			{:else}
				<a class="text-3xl" href="/sign-in">Orders</a>
				<a class="text-3xl" href="/orders">Logout</a>
			{/if}
			<CartIcon />
		</div>
	{/if}
</section>
