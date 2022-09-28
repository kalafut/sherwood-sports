<script>
  import { sportsFilter } from "../stores";
  import { sports } from "../data";

  const toggleSport = (sport) => {
    sportsFilter.update((v) => {
      if (v.has(sport)) {
        return v.delete(sport);
      } else {
        return v.add(sport);
      }
    });
  };
  console.log(Array.from(sportsFilter));
</script>

<form autocomplete="off">
  {#each sports as sport (`sport-${sport}`)}
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id={`sport-filter-${sport}`}
        checked={$sportsFilter.has(sport)}
        on:change={(e) => {
          toggleSport(sport);
        }} />
      <label class="form-check-label" for={`sport-filter-${sport}`}>
        {sport}
      </label>
    </div>
  {/each}
</form>
