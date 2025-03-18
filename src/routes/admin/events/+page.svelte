<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>

<a href="/admin/events/new" class="block w-fit mx-auto bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
	Create a New Event
</a>

<div class="mt-6 space-y-4">
	{#each data.events as event (event.id)}
		<div class="bg-white p-4 rounded-lg shadow-md border border-gray-200" transition:slide>
			<p class="text-gray-700 text-sm">
				<strong>ID:</strong> {event.id} |
				<strong>Title:</strong> {event.title} |
				<strong>Url:</strong> {event.url} |
				<strong>Start date:</strong> {new Date(event.start_date).toDateString()} |
				<strong>End date:</strong> {new Date(event.end_date).toDateString()} |
				<strong>Start time:</strong> {event.start_time} |
				<strong>Location:</strong> {event.locationName} |
				<strong>Category:</strong> {event.categoryName}
			</p>
			<form action="?/deleteEvent" method="POST" use:enhance class="flex justify-end mt-2">
				<input type="hidden" name="id" value={event.id} />
				<button type="submit" class="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700 transition">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
