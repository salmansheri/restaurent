<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Notification from '../components/Notification.svelte';
	import './styles.css';
</script>

<div class="app">
	<Notification />
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
