<script>
  import RangeSlider from "svelte-range-slider-pips/src";
  import { ageRange } from "../stores";
  import * as consts from "../consts";

  const handleAdjust = (e) => {
    const values = e.detail.values;
    ageRange.update(() => {
      return { min: values[0], max: values[1] };
    });
  };
</script>

<RangeSlider
  float
  range
  pushy
  first="label"
  last="label"
  min={consts.MIN_FILTER_AGE}
  max={consts.MAX_FILTER_AGE}
  values={[$ageRange.min, $ageRange.max]}
  on:change={handleAdjust}
  formatter={(v, i, p) =>
    v == consts.MAX_FILTER_AGE ? `${consts.MAX_FILTER_AGE}+` : v}
  pips
/>
