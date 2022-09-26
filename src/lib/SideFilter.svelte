<script>
  import SportsFilter from "./SportsFilter.svelte";
  import AgeFilter from "./AgeFilter.svelte";
  import LocalOnlyFilter from "./LocalOnlyFilter.svelte";
  import SeasonFilter from "./SeasonFilter.svelte";
  import { resetFilters } from "../stores";
  import Sliders2 from "svelte-bootstrap-icons/lib/Sliders2.svelte";
</script>

<button
  class="btn btn-outline-success p-2 m-2"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasExample"
  aria-controls="offcanvasExample">
  <Sliders2 /> Filters
</button>

<div
  class="offcanvas offcanvas-start"
  data-bs-scroll="false"
  tabindex="-1"
  id="offcanvasExample"
  aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close" />
  </div>
  <div class="offcanvas-body">
    <h5>Sports</h5>
    <div class="mb-4">
      <SportsFilter />
    </div>
    <h5>Age Range</h5>
    <div class="mb-6">
      <AgeFilter />
    </div>
    <h5 class="pt-4">Season</h5>
    <div class="mb-4">
      <SeasonFilter />
    </div>
    <h5>Location</h5>
    <div class="mb-4">
      <LocalOnlyFilter />
    </div>
    <button class="btn btn-danger" type="button" on:click={resetFilters}>
      Reset
    </button>
  </div>
</div>
