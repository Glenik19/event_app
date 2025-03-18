<script>
	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Create a New Category</h1>

<form method="POST" action="?/createCategory" class="bg-white rounded-lg p-5 shadow-md max-w-md w-full mx-auto">
	<div class="mb-4">
		<label for="name" class="block text-sm mb-1 text-gray-600">Name</label>
		<input type="text" placeholder="Enter name" name="name" id="name" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
	</div>

	<button type="submit" class="bg-blue-500 text-white border-none py-2 px-4 rounded cursor-pointer w-full transition-colors duration-300 ease-in-out hover:bg-blue-700">
		Create Category
	</button>
</form>
