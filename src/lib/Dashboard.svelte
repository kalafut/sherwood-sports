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

    <form>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="t3">
          Default checkbox
        </label>
        <div class="col-sm-10">
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
    </form>
  </div>
</div>
