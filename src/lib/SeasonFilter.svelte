<script>
  import { seasonFilter } from "../stores";
  import { INITIAL_SEASON_FILTER } from "../consts";

  const reset = () => seasonFilter.set({ ...INITIAL_SEASON_FILTER });
</script>

<div>
  Season:
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="summer"
          bind:checked={$seasonFilter.summer}
        />
        <label class="form-check-label" for="summer">Summer</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="spring"
          bind:checked={$seasonFilter.spring}
        />
        <label class="form-check-label" for="spring">Spring</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="fall"
          bind:checked={$seasonFilter.fall}
        />
        <label class="form-check-label" for="fall">Fall</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="winter"
          bind:checked={$seasonFilter.winter}
        />
        <label class="form-check-label" for="winter">Winter</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button type="button" class="btn btn-primary" on:click={reset}>
        Reset
      </button>
    </div>
  </div>
</div>
