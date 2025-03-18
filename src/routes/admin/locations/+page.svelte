<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Locations</h1>

<a href="/admin/locations/new" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mb-6 transition hover:bg-blue-700">
	Add a New Location
</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="flex flex-col gap-4">
	{#each data.locations as location (location.id)}
		<div class="bg-white p-4 rounded-lg shadow-md transition-transform duration-300" transition:slide>
			<p class="text-gray-600 text-sm mb-2">
				<strong>ID:</strong> {location.id} | 
				<strong>Name:</strong> {location.name} | 
				<strong>Street:</strong> {location.street}
			</p>
			<form action="?/deleteLocation" method="POST" use:enhance class="flex justify-end">
				<input type="hidden" name="id" value={location.id} />
				<button type="submit" class="bg-red-500 text-white px-3 py-2 rounded-md text-sm transition hover:bg-red-700">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
