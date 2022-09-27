<script>
  import { currentMonth, isUpcoming } from "../util";
  import Season from "./Season.svelte";
  import AgeBadge from "./AgeBadge.svelte";
  import hash from "object-hash";
  import QuestionCircle from "svelte-bootstrap-icons/lib/QuestionCircle.svelte";

  export let orgs;

  const m = currentMonth();
</script>

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
  {#each orgs as org (hash(org))}
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            <div class="d-flex justify-content-between">
              {#if org.url}
                <a class="text-decoration-none" href={org.url}>{org.name}</a>
              {:else}
                {org.name}
              {/if}
              <span class="fw-bold fs-6 text-danger">
                {org.location ? org.location : ""}
              </span>
            </div>
          </h5>
          {#if org.summary}
            <p class="card-text">{org.summary}</p>
          {/if}
          <ul class="list-group list-group-flush">
            {#each org.programs as program (hash(program))}
              <li
                class="list-group-item d-flex align-items-start justify-content-between"
                class:list-group-item-success={isUpcoming(m, program.season)}>
                <div class="col d-flex align-items-start justify-content-start">
                  {#if program.url}
                    <a class="text-decoration-none" href={program.url}
                      >{program.name}</a>
                  {:else}
                    {program.name}
                  {/if}
                </div>
                <div class="col d-flex align-items-start justify-content-end">
                  <div class="col d-flex justify-content-end">
                    <Season {program} />
                  </div>
                  <div class="col d-flex justify-content-end">
                    <AgeBadge {program} />
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/each}
</div>
