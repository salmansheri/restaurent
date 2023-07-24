<script lang="ts">
	import Github from '$lib/images/github.svg';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Notification from '../components/Notification.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Restaurent - by salman sheriff</title>
	<meta name="description" content="Restaurent Website" />
	<link rel="icon" href={Github} />
</svelte:head>

<div class="app">
	<Notification />
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
