<script>
  import { localOnlyFilter } from "../stores";

  const setLocalOnly = (v) => {
    localOnlyFilter.set(v);
  };
</script>

<div class="dropdown">
  <button
    class="btn btn-outline-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Location
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>
      <a
        href="#"
        class="dropdown-item"
        class:active={!$localOnlyFilter}
        on:click={() => {
          setLocalOnly(false);
        }}>All</a
      >
    </li>
    <li>
      <a
        href="#"
        class="dropdown-item"
        class:active={$localOnlyFilter}
        on:click={() => {
          setLocalOnly(true);
        }}>Sherwood</a
      >
    </li>
  </ul>
</div>
<!-- Local only: <input
  type="checkbox"
  checked={$localOnlyFilter}
  on:change={toggleLocalOnly}
/> -->
