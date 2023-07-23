<script>
	import Menu from './Menu.svelte';
	import MainNav from './MainNav.svelte';
</script>

<section
	class=" flex items-center justify-between px-5 h-12 bg-clip-padding bg-red-500/10 backdrop-blur-sm backgdrop-filter sticky top-0 md:h-24 border-b-2 border-b-red-500 shadow-md"
>
	<!-- logo  -->
	<div>
		<a class="text-xl font-bold" href="/">Massimo</a>
	</div>
	<!-- Desktop  -->
	<div>
		<MainNav />

		<!-- mobile nav  -->

		<Menu />
	</div>
</section>
