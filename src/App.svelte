<script>
  import Directory from "./lib/Directory.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import About from "./lib/About.svelte";
  import hash from "./hash";
  import Contribute from "./lib/Contribute.svelte";
  import Errors from "./lib/Errors.svelte";
  import Analytics from "./lib/Analytics.svelte";
</script>

<main>
  <div class="container">
    <Errors />
    <NavBar />
    {#if $hash == "#about"}
      <About />
    {:else if $hash == "#contribute"}
      <Contribute />
    {:else}
      <!-- <WelcomeText /> -->
      <Directory />
    {/if}
  </div>
</main>
<Analytics />

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
