<script>
  import { monthStr, allYear } from "../util";
  import QuestionCircle from "svelte-bootstrap-icons/lib/QuestionCircle.svelte";
  import * as consts from "../consts";

  export let program;
  const { season } = program;
</script>

<div>
  {#if season === consts.CHECK_SITE}
    <span />
  {:else if allYear(season)}
    Year round
  {:else if season}
    {`${monthStr(season[0])}–${monthStr(season[1])}`}
  {:else}
    <QuestionCircle />
  {/if}
</div>
