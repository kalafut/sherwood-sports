<script>
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import Filter from "./Filter.svelte";
  import DirectoryHeader from "./DirectoryHeader.svelte";
  import WelcomeBanner from "./WelcomeBanner.svelte";
  import MovingBanner from "./MovingBanner.svelte";

  const currentDomain = window.location.hostname;
</script>

<div class="row">
  <div class="col">
    {#if currentDomain === "sherwoodsports.org"}
      <MovingBanner />
    {/if}
    <WelcomeBanner />
    <DirectoryHeader />
    <Filter />
    <!-- <FilterBar /> -->
    <!-- <WelcomeText /> -->
    <!-- <FilterContainer /> -->
    <CardView orgs={$filteredOrgs} />
  </div>
</div>
