<script>
  import { monthStr } from "../util";
  import { ALL_YEAR } from "../consts";

  export let program;
  const { season } = program;
  let noSeason = !season || season === ALL_YEAR;
</script>

<div>
  {#if !noSeason}
    {`${monthStr(season[0])}–${monthStr(season[1])}`}
  {/if}
</div>
