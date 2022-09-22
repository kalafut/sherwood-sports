<script>
  import { Badge } from "sveltestrap";
  import { programAgeText } from "../util";

  export let program;

  const { text, color } = programAgeText(program);
</script>

{#if text}
  <Badge pill {color}>
    {text}
  </Badge>
{/if}
