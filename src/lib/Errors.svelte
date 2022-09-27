<script>
  import { errors } from "../errorChecks";
</script>

{#if errors.length > 0}
  <div class="bg-warning">
    <h2 class="bg-danger text-light">
      The bundled data has the following errors:
    </h2>
    <ul>
      {#each errors as error}
        <li>{@html error}</li>
      {/each}
    </ul>
  </div>
{/if}
