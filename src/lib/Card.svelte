<script>
  import { currentMonth, isUpcoming } from "../util";
  import Season from "./Season.svelte";
  import AgeBadge from "./AgeBadge.svelte";
  import hash from "object-hash";

  const m = currentMonth();
  export let org;
</script>

<div class="col">
  <div class="card border border-3 border-dark border-opacity-25">
    <div class="card-body">
      <h5 class="card-title">
        <div class="d-flex justify-content-between">
          {#if org.url}
            <a class="text-decoration-none" href={org.url} target="_blank">
              {org.name}
            </a>
          {:else}
            {org.name}
          {/if}
          <span class="fw-bold fs-6 text-danger">
            {org.location ? org.location : ""}
          </span>
        </div>
      </h5>
      {#if org.summary}
        <p class="card-text">{@html org.summary}</p>
      {/if}
      <ul class="list-group list-group-flush">
        {#each org.programs as program (hash(program))}
          <li
            class="list-group-item d-flex align-items-start justify-content-between"
            class:list-group-item-success={isUpcoming(m, program.season)}>
            <div class="col d-flex align-items-start justify-content-start">
              {#if program.url}
                <a
                  class="text-decoration-none"
                  href={program.url}
                  target="_blank">
                  {program.name}
                </a>
              {:else}
                {program.name}
              {/if}
            </div>
            <div class="col d-flex align-items-start justify-content-end">
              <div class="col d-flex justify-content-end">
                <Season {program} />
              </div>
              <div class="col ms-2 d-flex justify-content-end">
                <AgeBadge {program} />
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
