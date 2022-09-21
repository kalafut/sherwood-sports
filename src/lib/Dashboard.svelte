<script>
  import { Row, Col, Container } from "sveltestrap";
  import WelcomeText from "./WelcomeText.svelte";
  import { orgs } from "../stores";
  import CardView from "./CardView.svelte";
  import FilterContainer from "./FilterContainer.svelte";
</script>

<Row>
  <Col>
    <WelcomeText />
    <FilterContainer />
    <CardView orgs={$orgs} />
  </Col>
</Row>
