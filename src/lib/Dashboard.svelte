<script>
  import { Row, Col, Container } from "sveltestrap";
  import WelcomeText from "./WelcomeText.svelte";
  import { filteredOrgs } from "../stores";
  import CardView from "./CardView.svelte";
  import FilterContainer from "./FilterContainer.svelte";
</script>

<Row>
  <Col>
    <WelcomeText />
    <FilterContainer />
    <CardView orgs={$filteredOrgs} />
  </Col>
</Row>
