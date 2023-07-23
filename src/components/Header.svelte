<script>
	import Menu from './Menu.svelte';
</script>

<section
	class="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 bg-red-500/10 backdrop-blur-sm bg-clip-padding backdrop-filter uppercase"
>
	<!-- logo  -->
	<div>
		<a class="text-xl font-bold" href="/">Massimo</a>
	</div>
	<div>
		<Menu />
	</div>
</section>
