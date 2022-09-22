<script>
  import { monthStr, allYear } from "../util";

  export let program;
  const { season } = program;
</script>

<div>
  {#if allYear(season)}
    Year round
  {:else if season}
    {`${monthStr(season[0])}–${monthStr(season[1])}`}
  {/if}
</div>
