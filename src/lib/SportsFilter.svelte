<script>
  import { sportsFilter } from "../stores";
  import { sports } from "../data";
  import { ImmutableStringSet as Set } from "../util";

  const toggleSport = (sport) => {
    sportsFilter.update((v) => {
      if (v.has(sport)) {
        return v.delete(sport);
      } else {
        return v.add(sport);
      }
    });
  };

  // indeterminate states: "all", "none", "some"
  $: allNone =
    $sportsFilter.size === sports.length
      ? "all"
      : $sportsFilter.size === 0
      ? "none"
      : "some";

  const toggleAllNone = () => {
    switch (allNone) {
      case "none":
      case "some":
        sportsFilter.set(new Set(sports));
        break;
      case "all":
        sportsFilter.set(new Set([]));
        break;
    }
  };
</script>

<form autocomplete="off">
  <div class="form-check mb-3">
    <input
      class="form-check-input"
      type="checkbox"
      checked={allNone === "all"}
      indeterminate={allNone === "some"}
      id="any-none"
      on:change={toggleAllNone} />
    <label class="form-check-label" for="any-none">
      <span class="fw-bold">Any/None</span>
    </label>
  </div>
  {#each sports as sport (`sport-${sport}`)}
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id={`sport-filter-${sport}`}
        checked={$sportsFilter.has(sport)}
        on:change={() => {
          toggleSport(sport);
        }} />
      <label class="form-check-label" for={`sport-filter-${sport}`}>
        {sport}
      </label>
    </div>
  {/each}
</form>
