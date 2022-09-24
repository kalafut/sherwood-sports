<script>
  import WelcomeText from "./WelcomeText.svelte";
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import FilterContainer from "./FilterContainer.svelte";
  import { sports } from "../data";
  import SportsFilter2 from "./SportsFilter2.svelte";
  import AgeFilter2 from "./AgeFilter2.svelte";
  import FilterBar from "./FilterBar.svelte";
</script>

<div class="row">
  <div class="col">
    <FilterBar />
    <!-- </div> -->
    <!-- <WelcomeText /> -->
    <!-- <FilterContainer /> -->
    <CardView orgs={$filteredOrgs} />
  </div>
</div>
