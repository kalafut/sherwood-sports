<script>
  import { Row, Col, Container } from "sveltestrap";
  import WelcomeText from "./WelcomeText.svelte";
  import { orgs as allOrgs } from "../data/data";
  import CardView from "./CardView.svelte";
  import FilterContainer from "./FilterContainer.svelte";

  let orgs = allOrgs();
</script>

<Row>
  <Col>
    <WelcomeText />
    <FilterContainer />
    <CardView {orgs} />
  </Col>
</Row>
