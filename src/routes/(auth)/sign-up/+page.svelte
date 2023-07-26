<script lang="ts">
	import { form, field } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';

	const name = field('name', '', [required()]);

	const userEmail = field('email', '', [email(), email()]);

	const password = field('password', '', [required()]);

	const registerForm = form(userEmail, password, name);
	const onSubmit = () => {
		console.log($userEmail.value, $password.value, $name.value);
	};
</script>

<section class="min-h-[calc(100vh-10rem)] flex items-center justify-center w-full">
	<div class="lg:w-1/3 md:w-1/2 w-full bg-red-500/10 p-6 rounded-2xl xl">
		<h1 class="my-3 text-3xl font-bold text-red-500">Register</h1>
		<form class="flex flex-col space-y-3" on:submit|preventDefault={onSubmit}>
			<label>
				Name
				<input
					class="focus:outline-none focus:ring-red-500 w-full p-2 rounded-md ring-1 ring-red-500/40 my-2"
					bind:value={$name.value}
				/>
			</label>
			<label>
				Email:
				<input
					class="focus:outline-none focus:ring-red-500 w-full p-2 rounded-md ring-1 ring-red-500/40 my-2"
					bind:value={$userEmail.value}
				/>
			</label>
			<label>
				Password:
				<input
					class="focus:outline-none focus:ring-red-500 w-full p-2 rounded-md ring-1 ring-red-500/40 my-2"
					bind:value={$password.value}
				/>
			</label>
			<button
				class="w-full md:w-fit bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-500/80 inline-flex items-center justify-center transition-all duration-300 ease-linear"
				type="submit"
			>
				Register
			</button>
			<hr class="border-2 border-red-500/25" />
			<div>
				Already Have an Account? <a class="text-red-500 hover:underline" href="/sign-in">Login</a>
			</div>
		</form>

		{#if $registerForm.hasError('userEmail.required') || $registerForm.hasError('password.required') || $registerForm.hasError('name.required')}
			<div class="text-red-500">Something Went wrong</div>
		{/if}
	</div>
</section>
