<script>
	import { flip } from 'svelte/animate';

	let { data } = $props();

	let filteredEvents = $state(data.events);
	let selectedCategory = $state('all');

	function filterEvents() {
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>

<div>
	<div class="container">
		{#if data.user}
			<p class="welcome-message">Welcome back, {data.user.username}!</p>

			<form action="/logout?/logout" method="POST">
				<button type="submit" class="action-button logout-button">Logout</button>
			</form>
			
			<form action="/logout?/deleteAccount" method="POST">
				<button type="submit" class="action-button delete-button">Delete Account</button>
			</form>
		{:else}
			<p class="login-message">
				You are not logged in.

				<a href="/login" class="login-link">Login</a>
				or
				<a href="/register" class="login-link">Register</a>
			</p>
		{/if}
	</div>
</div>

<h1 class="events-title">My Event App</h1>

<p class="events-description">Explore events by category or see them all at once.</p>

<div class="filter-container">
	<label for="category-filter" class="filter-label">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterEvents}>
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

<div class="events-container">
	{#if filteredEvents.length > 0}
		{#each filteredEvents as event (event.id)}
			<div animate:flip class="event-card">
				<p class="event-details">
					<strong>ID:</strong>
					{event.id} |
					<strong>Title:</strong>
					{event.title} |
					<strong>Start Date:</strong>
					{new Date(event.start_date).toDateString()}
				</p>
			</div>
		{/each}
	{/if}
</div>

<style>
	.events-title {
		font-size: 2.5em;
		margin-bottom: 20px;
		text-align: center;
		color: #333;
	}

	.events-description {
		text-align: center;
		color: #555;
		margin-bottom: 30px;
		font-size: 18px;
	}

	.filter-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.filter-label {
		margin-right: 10px;
		font-size: 16px;
		color: #444;
	}

	#category-filter {
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
		cursor: pointer;
		background-color: #f9f9f9;
		transition:
			border-color 0.3s,
			background-color 0.3s;
	}

	#category-filter:focus {
		border-color: #007bff;
		background-color: #fff;
	}

	.events-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		max-width: 800px;
		margin: 0 auto;
	}

	.event-card {
		background-color: #fff;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.event-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	.event-details {
		font-size: 16px;
		color: #444;
		line-height: 1.5;
		margin: 0;
	}

	.event-details strong {
		font-weight: bold;
		color: #222;
	}

	.container {
		font-family: Arial, sans-serif;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #f9f9f9;
		text-align: center;
		max-width: 400px;
		margin: 50px auto;
	}

	.welcome-message {
		font-size: 1.5rem;
		color: burlywood;
		font-weight: bold;
	}

	.login-message {
		font-size: 1rem;
		color: #1d767c;
	}

	.login-link {
		color: #3498db;
		text-decoration: none;
		font-weight: bold;
	}

	.login-link:hover {
		text-decoration: underline;
		color: #2980b9;
	}

	.action-button {
		font-family: Arial, sans-serif;
		font-size: 16px;
		padding: 10px 20px;
		margin: 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: 
			background-color 0.3s, 
			color 0.3s, 
			transform 0.2s;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.logout-button {
		background-color: #f1c40f;
		color: #fff;
	}

	.logout-button:hover {
		background-color: #d4ac0d;
		transform: scale(1.05);
	}

	.logout-button:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(241, 196, 15, 0.8);
	}

	.delete-button {
		background-color: #e74c3c;
		color: #fff;
	}

	.delete-button:hover {
		background-color: #c0392b;
		transform: scale(1.05);
	}

	.delete-button:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(231, 76, 60, 0.8);
	}

	/* Optional: Zentriere die Buttons */
	.container form {
		display: inline-block;
	}

</style>
