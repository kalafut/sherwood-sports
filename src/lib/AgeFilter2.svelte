<script>
  import RangeSlider from "svelte-range-slider-pips/src";
  import { ageRange } from "../stores";
  import * as consts from "../consts";

  const handleAdjust = (e) => {
    ageRange.update((a) => {
      if (a.min > a.max) {
        const val = parseInt(e.target.value);
        return { min: val, max: val };
      }
      return { min: a.min, max: a.max };
    });
  };

  const handleReset = () => {
    ageRange.set({ min: consts.MIN_FILTER_AGE, max: consts.MAX_FILTER_AGE });
  };

  const ages = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
</script>

<button
  class="btn btn-outline-primary dropdown-toggle"
  type="button"
  id="dropdownMenuClickableInside"
  data-bs-toggle="dropdown"
  data-bs-auto-close="outside"
  aria-expanded="false"
>
  Age Range
</button>
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="t3" class="form-label">Min</label>
      <select
        id="t3"
        bind:value={$ageRange.min}
        on:change={handleAdjust}
        class="form-select"
        aria-label="Default select example"
      >
        {#each ages as age}
          <option value={age}>
            {age == 18 ? "18+" : age}
          </option>
        {/each}
      </select>
    </div>
    <div class="mb-3">
      <label for="t4" class="form-label">Max</label>
      <select
        bind:value={$ageRange.max}
        on:change={handleAdjust}
        id="t4"
        class="form-select"
        aria-label="Default select example"
      >
        {#each ages as age}
          <option value={age}>
            {age == 18 ? "18+" : age}
          </option>
        {/each}
      </select>
    </div>
    <button type="button" class="btn btn-primary" on:click={handleReset}>
      Reset
    </button>
  </form>
</div>
<!-- <div class="dropdown">
  <button
    class="btn btn-outline-primary dropdown-toggle"
    type="button"
    id="dropdownMenuClickableInside"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    Age
  </button>
  <form class="dropdown-menu p-0" style="not-width:300px">
    <form>
      <div class="row mb-2">
        <div class="col-sm-3">
          <label class="m-3" for="t3">Minsewf</label>
        </div>
        <div class="col-sm-9">
          <select
            id="t3"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </form> -->
<!-- <form>
      <div class="input-group">
        <span class="input-group-text">Min</span>
        <select class="form-select" aria-label="Default select example">
          <option selected value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="input-group">
        <span class="input-group-text">Max</span>
        <select class="form-select" aria-label="Default select example">
          <option selected value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </form>
  </form>-->

<!-- <div
    style="width:400px"
    class="dropdown-menu"
    aria-labelledby="dropdownMenuClickableInside"
  >
    <RangeSlider
      float
      range
      pushy
      first="label"
      last="label"
      min={consts.MIN_FILTER_AGE}
      max={consts.MAX_FILTER_AGE}
      values={[$ageRange.min, $ageRange.max]}
      on:change={handleAdjust}
      formatter={(v, i, p) =>
        v == consts.MAX_FILTER_AGE ? `${consts.MAX_FILTER_AGE}+` : v}
      pips
    />
  </div> -->
