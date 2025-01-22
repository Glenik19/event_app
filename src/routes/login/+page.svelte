<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	export let form;
</script>

<div class="container">
	<form class="login-form" action="?/login" method="POST" use:enhance>
		<h1>Login</h1>

		<label for="email">E-Mail</label>
		<input type="text" name="email" id="email" placeholder="Enter your email" required />

		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="Enter your password"
			required
		/>

		<button type="submit">Login</button>

		{#if form}
			<Warning message={form.message} />
		{/if}
	</form>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #f3f4f6;
		color: #333;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f3f4f6;
		padding: 20px;
	}

	.login-form {
		background: white;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.login-form h1 {
		font-size: 24px;
		text-align: center;
		margin-bottom: 20px;
		color: #333;
	}

	label {
		font-size: 14px;
		font-weight: bold;
		color: #555;
	}

	input {
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ddd;
		border-radius: 5px;
		background-color: #f9fafb;
	}

	input:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
	}

	button {
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
		color: white;
		background-color: #3b82f6;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #2563eb;
	}

	button:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}
</style>
