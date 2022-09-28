<script>
  import { seasonFilter } from "../stores";
  import { INITIAL_SEASON_FILTER } from "../consts";
  import { toTitlecase } from "../util";

  const reset = () => seasonFilter.set({ ...INITIAL_SEASON_FILTER });
</script>

<form autocomplete="off">
  {#each ["spring", "summer", "fall", "winter"] as season}
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id={`season-filter-${season}`}
        bind:checked={$seasonFilter[season]} />
      <label class="form-check-label" for={`season-filter-${season}`}>
        {toTitlecase(season)}
      </label>
    </div>
  {/each}
</form>
