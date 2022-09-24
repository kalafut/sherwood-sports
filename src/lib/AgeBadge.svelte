<script>
  import { programAgeText } from "../util";

  export let program;

  const { text, color } = programAgeText(program);
</script>

{#if text}
  <span class={`badge rounded-pill text-bg-${color}`}>
    {text}
  </span>
{/if}
