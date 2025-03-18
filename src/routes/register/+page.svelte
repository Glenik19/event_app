<script>
  import { enhance } from '$app/forms';
  import Warning from '$lib/components/Warning.svelte';
  export let form;
</script>

<div class="flex justify-center items-center h-screen bg-gray-100 p-5">
  <form action="?/register" method="POST" use:enhance 
        class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border border-gray-300 flex flex-col gap-5">
      <h1 class="text-xl font-bold text-gray-800 text-center">Register</h1>

      <label for="email" class="text-sm font-semibold text-gray-700">E-Mail</label>
      <input type="text" name="email" id="email" required 
             class="p-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 bg-white" />

      <label for="username" class="text-sm font-semibold text-gray-700">Username</label>
      <input type="text" name="username" id="username" required 
             class="p-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 bg-white" />

      <label for="password" class="text-sm font-semibold text-gray-700">Password</label>
      <input type="password" name="password" id="password" required 
             class="p-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 bg-white" />

      <button type="submit" class="p-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition active:scale-95">Register</button>

      {#if form}
          <Warning message={form.message} />
      {/if}
  </form>
</div>