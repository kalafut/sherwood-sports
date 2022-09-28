<script>
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import Filter from "./Filter.svelte";
  import DirectoryHeader from "./DirectoryHeader.svelte";
  import WelcomeBanner from "./WelcomeBanner.svelte";
</script>

<div class="row">
  <div class="col">
    <WelcomeBanner />
    <DirectoryHeader />
    <Filter />
    <!-- <FilterBar /> -->
    <!-- <WelcomeText /> -->
    <!-- <FilterContainer /> -->
    <CardView orgs={$filteredOrgs} />
  </div>
</div>
