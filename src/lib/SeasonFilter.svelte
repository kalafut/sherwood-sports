<script>
  import { seasonFilter } from "../stores";
  import { INITIAL_SEASON_FILTER } from "../consts";
  import { toTitlecase } from "../util";

  const reset = () => seasonFilter.set({ ...INITIAL_SEASON_FILTER });
</script>

<div>
  <div class="dropdown">
    <button
      class="btn btn-outline-primary dropdown-toggle"
      type="button"
      id="dropdownMenuClickableInside"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
    >
      Season
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
      {#each ["spring", "summer", "fall", "winter"] as season}
        <li class="px-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id={`season-filter-${season}`}
              bind:checked={$seasonFilter[season]}
            />
            <label class="form-check-label" for={`season-filter-${season}`}>
              {toTitlecase(season)}
            </label>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
