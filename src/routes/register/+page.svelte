<script>
    import { enhance } from '$app/forms';
    import Warning from '$lib/components/Warning.svelte';
    export let form;
  </script>
  
  <div class="form-container">
    <form action="?/register" method="POST" use:enhance>
      <h1>Register</h1>
  
      <label for="email">E-Mail</label>
      <input type="text" name="email" id="email" required />
  
      <label for="username">Username</label>
      <input type="text" name="username" id="username" required />
  
      <label for="password">Password</label>
      <input type="password" name="password" id="password" required />
  
      <button type="submit">Register</button>
  
      {#if form}
        <Warning message={form.message} />
      {/if}
    </form>
  </div>
  
  <style>
    :global(body) {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      background-color: #f8f9fa; /* Hellgrauer Hintergrund */
      color: #212529; /* Dunkles Grau */
    }
  
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      padding: 20px;
      background-color: #f8f9fa;
    }
  
    form {
      background: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtile Schatten */
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid #dee2e6; /* Dezente Umrandung */
    }
  
    h1 {
      font-size: 22px;
      text-align: center;
      color: #343a40; /* Dunkelgrauer Farbton */
      margin-bottom: 10px;
    }
  
    label {
      font-size: 14px;
      font-weight: 600;
      color: #495057;
      margin-bottom: 5px;
    }
  
    input {
      padding: 10px;
      border: 1px solid #ced4da; /* Heller Rand */
      border-radius: 5px;
      font-size: 14px;
      color: #495057;
      background-color: #ffffff;
      transition: border-color 0.3s ease-in-out;
    }
  
    input:focus {
      border-color: #0d6efd; /* Blau als Akzentfarbe */
      outline: none;
      box-shadow: 0 0 5px rgba(13, 110, 253, 0.25); /* Dezentes Blau bei Fokus */
    }
  
    button {
      padding: 12px;
      background-color: #0d6efd; /* Blau als Hauptfarbe */
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
  
    button:hover {
      background-color: #0b5ed7; /* Etwas dunkleres Blau bei Hover */
    }
  
    button:active {
      transform: scale(0.98);
    }
  
  </style>
  