<script lang="ts">
  import { localOnlyState } from "../stores";
  import { sports } from "../data/data";

  const toggleLocalOnly = () => {
    localOnlyState.update((val) => !val);
  };
</script>

Local only: <input
  type="checkbox"
  checked={$localOnlyState}
  on:change={toggleLocalOnly}
/>
{sports}
