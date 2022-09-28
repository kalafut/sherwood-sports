<script>
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import SideFilter from "./SideFilter.svelte";
  import DirectoryHeader from "./DirectoryHeader.svelte";
  import WelcomeBanner from "./WelcomeBanner.svelte";
</script>

<div class="row">
  <div class="col">
    <WelcomeBanner />
    <DirectoryHeader />
    <SideFilter />
    <!-- <FilterBar /> -->
    <!-- <WelcomeText /> -->
    <!-- <FilterContainer /> -->
    <CardView orgs={$filteredOrgs} />
  </div>
</div>
