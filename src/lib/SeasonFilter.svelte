<script>
  import { Row, Col, FormCheck, Button } from "sveltestrap";
  import { seasonFilter } from "../stores";
  import { INITIAL_SEASON_FILTER } from "../consts";

  const reset = () => seasonFilter.set({ ...INITIAL_SEASON_FILTER });
</script>

<div>
  Season:
  <Row>
    <Col>
      <FormCheck bind:checked={$seasonFilter.summer} label="Summer" />
    </Col>
    <Col>
      <FormCheck bind:checked={$seasonFilter.spring} label="Spring" />
    </Col>
  </Row>
  <Row>
    <Col>
      <FormCheck bind:checked={$seasonFilter.fall} label="Fall" />
    </Col>
    <Col>
      <FormCheck bind:checked={$seasonFilter.winter} label="Winter" />
    </Col>
  </Row>
  <Row>
    <Col><Button on:click={reset}>Reset</Button></Col>
  </Row>
</div>
