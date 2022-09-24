<script>
  import { sportsFilter } from "../stores";
  import { sports } from "../data";
  import { ImmutableStringSet } from "../util";
  import { Input, Form } from "sveltestrap";

  const toggleSport = (sport) => {
    sportsFilter.update((v) => {
      if (v.has(sport)) {
        return v.delete(sport);
      } else {
        return v.add(sport);
      }
    });
  };

  const allOn = () => {
    sportsFilter.set(new ImmutableStringSet(sports));
  };
  const allOff = () => {
    sportsFilter.set(new ImmutableStringSet());
  };
</script>

<!-- checked={sportsFilter.has(sport)} -->
<!-- <Dropdown group sz="lg">
  <DropdownToggle caret data-bs-auto-close="false">Sports</DropdownToggle>
  <DropdownMenu>
    <DropdownItem on:click={allOn}>All</DropdownItem>
    <DropdownItem on:click={allOff}>None</DropdownItem>
    <DropdownItem divider />
    {#each sports as sport}
      <DropdownItem>
        <Form>
          <Input
            type="checkbox"
            id={`sport-filter-${sport}`}
            checked={$sportsFilter.has(sport)}
            label={sport}
            on:change={(e) => {
              toggleSport(sport);
            }}
          />
        </Form>
      </DropdownItem>
    {/each}
  </DropdownMenu>
</Dropdown> -->

<div class="dropdown">
  <button
    class="btn btn-outline-primary dropdown-toggle"
    type="button"
    id="dropdownMenuClickableInside"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    Sports
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    {#each sports as sport}
      <li class="px-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id={`sport-filter-${sport}`}
            checked={$sportsFilter.has(sport)}
            on:change={(e) => {
              toggleSport(sport);
            }}
          />
          <label class="form-check-label" for={`sport-filter-${sport}`}>
            {sport}
          </label>
        </div>
      </li>
    {/each}
  </ul>
</div>
