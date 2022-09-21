<script>
  import { sportsFilter } from "../stores";
  import { sports } from "../data";

  const toggleSport = (sport) => {
    sportsFilter.update((v) => {
      if (v.has(sport)) {
        return v.delete(sport);
      } else {
        return v.add(sport);
      }
    });
  };
</script>

<!-- checked={sportsFilter.has(sport)} -->
<div>
  {#each sports as sport}
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
  {/each}
</div>

<!-- function SportFilterRow(props: SportFilterRowProps) {
    const { sport } = props;
    const sportsFilter = useStore((state) => state.sportsFilter);
    const toggleSport = useStore((state) => state.toggleSport);
  
    return (
    );
  }
  
  interface SportFilterProps {
    sports: string[];
  }
  
  export function SportFilter(props: SportFilterProps) {
    const { sports } = props;
  
    return (
      <div>
        {sports.map((sport) => (
          <SportFilterRow key={sport} sport={sport} />
        ))}
      </div>
    );
  } -->
