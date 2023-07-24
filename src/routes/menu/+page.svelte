<script lang="ts">
	import { menu } from '../../data';
	import MenuCard from './MenuCard.svelte';
</script>

<section
	class="p-4 lg:px-20 xl:px-40 h-[calc[100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center"
>
	{#each menu as item}
		<a href={item.slug}>
			<MenuCard {item} />
		</a>
	{/each}
</section>
