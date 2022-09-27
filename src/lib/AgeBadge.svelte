<script>
  import { programAgeText } from "../util";
  import QuestionCircle from "svelte-bootstrap-icons/lib/QuestionCircle.svelte";

  export let program;

  const { text, color } = programAgeText(program);
</script>

<div>
  {#if text}
    <span class={`badge rounded-pill text-bg-${color}`}>
      {text}
    </span>
  {:else}
    <QuestionCircle />
  {/if}
</div>
