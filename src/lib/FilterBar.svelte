<script>
  import SportsFilter2 from "./SportsFilter2.svelte";
  import AgeFilter2 from "./AgeFilter2.svelte";
  import LocalOnlyFilter from "./LocalOnlyFilter.svelte";
  import SeasonFilter from "./SeasonFilter.svelte";
</script>

<!-- <div class="row"> -->
<div class="d-flex flex-row mb-3">
  <div class="p-4">
    <SportsFilter2 />
  </div>
  <div class="p-4">
    <AgeFilter2 />
  </div>
  <div class="p-4">
    <SeasonFilter />
  </div>
  <div class="p-4">
    <LocalOnlyFilter />
  </div>
</div>
