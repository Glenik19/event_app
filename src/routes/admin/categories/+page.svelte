<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-2xl mb-6 text-center text-gray-800 font-bold ">Categories</h1>

<a href="/admin/categories/new" class="inline-block bg-blue-500 text-white text-decoration-none py-2 px-4 rounded mb-5 transition-colors duration-300 ease-in-out hover:bg-blue-700">
	Create a New Category
</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="flex flex-col gap-4">
	{#each data.categories as category (category.id)}
		<div class="bg-white rounded-lg p-4 shadow-md transition-all duration-200" transition:slide>
			<p class="text-sm text-gray-600 mb-2">
				<strong>ID:</strong>
				{category.id} |
				<strong>Name:</strong>
				{category.name}
			</p>
			<form action="?/deleteCategory" method="POST" use:enhance class="flex justify-end">
				<input type="hidden" name="id" value={category.id} />
				<button type="submit" class="bg-red-500 text-white border-none py-2 px-3 rounded cursor-pointer text-sm transition-colors duration-300 ease-in-out hover:bg-red-700">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
