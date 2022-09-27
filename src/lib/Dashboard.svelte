<script>
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import SideFilter from "./SideFilter.svelte";
  import DashboardHeader from "./DashboardHeader.svelte";
</script>

<div class="row">
  <div class="col">
    <DashboardHeader />
    <SideFilter />
    <!-- <FilterBar /> -->
    <!-- <WelcomeText /> -->
    <!-- <FilterContainer /> -->
    <CardView orgs={$filteredOrgs} />
  </div>
</div>
