<script lang="ts">
	import Button from './Button.svelte';
	import CartIcon from './CartIcon.svelte';
	import PhoneIcon from '../lib/images/phone.png'; 

	let navLinks = [
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
			title: 'Contact',
			href: '/contacts'
		},
		{
			id: 4,
			title: 'orders',
			href: '/orders'
		}
	];

	let user = true;
</script>

<div class="hidden md:flex items-center space-x-10">
	<div class="bg-orange-300 flex items-center px-3 rounded-full py-1 gap-x-2 cursor-pointer">

		<img 
		src={PhoneIcon}
		alt="phone"
		class="cursor-pointer z-50 h-9 w-9"
		
		/>
		<p>99949494 </p>
	</div>
	{#each navLinks as link}
		<a href={link.href}>{link.title}</a>
	{/each}
	{#if user}
		<Button label="Sign out" />
	{:else}
		<Button label="Sign in" />
	{/if}
	<CartIcon />
</div>
