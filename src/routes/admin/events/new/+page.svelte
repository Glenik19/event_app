<script>
	let { data } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Create a New Event</h1>

<form method="POST" action="?/createEvent" class="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto space-y-4">
	<div class="space-y-2">
		<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
		<input type="text" name="title" id="title" placeholder="Enter title" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<div class="space-y-2">
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea name="description" id="description" placeholder="Enter description" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24"></textarea>
	</div>

	<div class="space-y-2">
		<label for="url" class="block text-sm font-medium text-gray-700">URL</label>
		<input type="text" name="url" id="url" placeholder="Enter URL" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<div class="space-y-2">
		<label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
		<input type="date" name="startDate" id="startDate" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<div class="space-y-2">
		<label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
		<input type="date" name="endDate" id="endDate" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<div class="space-y-2">
		<label for="startTime" class="block text-sm font-medium text-gray-700">Start Time</label>
		<input type="time" name="startTime" id="startTime" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<div class="space-y-2">
		<label for="locationId" class="block text-sm font-medium text-gray-700">Location</label>
		<select name="locationId" id="locationId" class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
			{#each data.locations as location (location.id)}
				<option value={location.id}>{location.name}</option>
			{/each}
		</select>
	</div>

	<div class="space-y-2">
		<label for="categoryId" class="block text-sm font-medium text-gray-700">Category</label>
		<select name="categoryId" id="categoryId" class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</div>

	<button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
		Create Event
	</button>
</form>
