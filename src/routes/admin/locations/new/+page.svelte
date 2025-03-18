<h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Location</h1>

<form method="POST" action="?/createLocation" class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4" use:enhance>
	<div>
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<input type="text" placeholder="Enter name" name="name" id="name" required 
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
	</div>

	<div>
		<label for="street" class="block text-sm font-medium text-gray-700">Street</label>
		<textarea placeholder="Enter street address" name="street" id="street" required 
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none h-20"></textarea>
	</div>

	<button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
		Add Location
	</button>
</form>
