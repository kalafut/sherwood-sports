<script>
  import Dashboard from "./lib/Dashboard.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import About from "./lib/About.svelte";
  import hash from "./hash";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
</svelte:head>

<main>
  <div class="container">
    <NavBar />
    {#if $hash == "#about"}
      <About />
    {:else}
      <Dashboard />
    {/if}
  </div>
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
