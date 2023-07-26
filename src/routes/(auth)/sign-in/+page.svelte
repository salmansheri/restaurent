<script lang="ts">
	import { form, field } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';

	const userEmail = field('email', '', [required(), email()]);

	const password = field('password', '', [required()]);

	const loginForm = form(userEmail, password);
	const onSubmit = () => {
		console.log($userEmail.value, $password.value);
	};
</script>

<section class="min-h-[calc(100vh-10rem)] flex items-center justify-center w-full">
	<div class="lg:w-1/3 md:w-1/2 w-full bg-red-500/10 p-6 rounded-2xl xl ">
        <h1 class="my-3 text-3xl font-bold text-red-500">Login</h1>
		<form class="flex flex-col space-y-3" on:submit|preventDefault={onSubmit}>
			<label>
				Email:
				<input class="focus:outline-none focus:ring-red-500 w-full p-2 rounded-md ring-1 ring-red-500/40 my-2" bind:value={$userEmail.value} />
			</label>
			<label>
				Password:
				<input class="focus:outline-none focus:ring-red-500 w-full p-2 rounded-md ring-1 ring-red-500/40 my-2" bind:value={$password.value} />
			</label>
            <button class="w-full md:w-fit bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-500/80 inline-flex items-center justify-center transition-all duration-300 ease-linear " type="submit">
                Login

            </button>
			<hr class="border-2 border-red-500/25" />
			<div>
				New to Massimo? <a class="text-red-500 hover:underline" href="/sign-up">Register</a>
			</div>
		</form>

		{#if $loginForm.hasError('userEmail.required') || $loginForm.hasError('password.required')}
			<div class="text-red-500">Something Went wrong</div>
		{/if}
	</div>
</section>
