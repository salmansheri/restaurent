<script lang="ts">
	import { onMount } from 'svelte';
	let message = '';
	let countdown = '';

	onMount(() => {
		var targetDate = new Date();

		targetDate.setHours(targetDate.getHours() + 1);

		var countdownTimer = setInterval(() => {
			var now = new Date().getTime();
			// @ts-ignore
			let remainingTime = targetDate - now;

			var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

			countdown = hours + 'h ' + minutes + 'm ' + seconds + 's ';
		});
	});
</script>

<div>
	{countdown}
</div>
