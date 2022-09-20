<script>
  import { ordinal } from "../util";
  import { Badge } from "sveltestrap";

  export let program;
  const { allAges, ageMin, ageMax, gradeMin, gradeMax } = program;

  let text;
  let color;

  if (allAges) {
    color = "success";
    text = "All";
  }

  if ((!text && ageMin) || ageMax) {
    if (ageMin && ageMax) {
      text = `${ageMin}–${ageMax}`;
    } else if (ageMax) {
      text = `2–${ageMax}`;
    } else if (ageMin) {
      text = `${ageMin}+`;
    }
    color = "primary";
  }

  if (!text) {
    if (gradeMin && gradeMax) {
      text = `${gradeMin}–${ordinal(gradeMax)}`;
    } else if (gradeMax) {
      text = `K–${ordinal(gradeMax)}`;
    } else if (gradeMin) {
      text = `${ordinal(gradeMin)}+`;
    }
    color = "info";
  }
</script>

{#if text}
  <Badge pill {color}>
    {text}
  </Badge>
{/if}
