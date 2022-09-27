<script>
  import hash from "object-hash";
  import Card from "./Card.svelte";

  import { resetFilters } from "../stores";
  export let orgs;
</script>

{#if orgs.length === 0}
  <div class="d-flex justify-content-center">
    <span class="fs-3">No organizations match these filters.</span>
  </div>
  <div class="d-flex justify-content-center">
    <span class="fs-3">
      Adjust or
      <button class="btn btn-danger" on:click={resetFilters}> Reset </button> them.</span>
  </div>
{:else}
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    {#each orgs as org (hash(org))}
      <Card {org} />
    {/each}
  </div>
{/if}
