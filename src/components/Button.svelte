<script lang="ts">
	import { goto } from '$app/navigation';

	export let label: string;

	const onClick = () => {
		if (label === 'Sign in') {
			goto('/sign-in');
		} else {
			return;
		}
	};
</script>

<button
	on:click={onClick}
	class="bg-red-500 px-4 py-2 rounded-md inline-flex items-center jusify-center text-white hover:bg-red-500/80"
	>{label}</button
>
