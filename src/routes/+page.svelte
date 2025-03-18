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

<div class="flex justify-center">
	<div class="bg-gray-100 text-center p-5 rounded-lg shadow-md max-w-md w-full">
		{#if data.user}
			<p class="text-xl font-bold text-yellow-700">Welcome back, {data.user.username}!</p>

			<form action="/logout?/logout" method="POST" class="inline-block">
				<button type="submit" class="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">Logout</button>
			</form>
			
			<form action="/logout?/deleteAccount" method="POST" class="inline-block">
				<button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105">Delete Account</button>
			</form>
		{:else}
			<p class="text-lg text-teal-700">
				You are not logged in.
				<a href="/login" class="text-blue-500 font-bold hover:underline hover:text-blue-700">Login</a>
				or
				<a href="/register" class="text-blue-500 font-bold hover:underline hover:text-blue-700">Register</a>
			</p>
		{/if}
	</div>
</div>

<h1 class="text-4xl text-center text-gray-800 font-bold mt-8">My Event App</h1>
<p class="text-center text-gray-600 text-lg mb-6">Explore events by category or see them all at once.</p>

<div class="flex justify-center items-center mb-5">
	<label for="category-filter" class="mr-3 text-gray-700 text-lg">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterEvents} class="p-2 text-lg border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300 bg-gray-50">
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
	{#if filteredEvents.length > 0}
		{#each filteredEvents as event (event.id)}
			<div animate:flip class="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] hover:shadow-lg">
				<p class="text-gray-700 text-lg">
					<strong class="text-gray-900">ID:</strong> {event.id} |
					<strong class="text-gray-900">Title:</strong> {event.title} |
					<strong class="text-gray-900">Start Date:</strong> {new Date(event.start_date).toDateString()}
				</p>
			</div>
		{/each}
	{/if}
</div>