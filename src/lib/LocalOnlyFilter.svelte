<script>
  import { localOnlyFilter } from "../stores";

  const setLocalOnly = (v) => {
    localOnlyFilter.set(v);
  };
</script>

<form autocomplete="off">
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      id="flexSwitchCheckChecked"
      bind:checked={$localOnlyFilter} />
    <label class="form-check-label" for="flexSwitchCheckChecked">
      Sherwood only
    </label>
  </div>
</form>
