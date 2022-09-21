<script>
  import { localOnlyFilter } from "../stores";

  const toggleLocalOnly = () => {
    localOnlyFilter.update((val) => !val);
  };
</script>

Local only: <input
  type="checkbox"
  checked={$localOnlyFilter}
  on:change={toggleLocalOnly}
/>
