<script>
  import {
    Card,
    CardBody,
    Collapse,
    Nav,
    NavLink,
    NavItem,
    TabPane,
    TabContent,
    Button,
    Row,
    Col,
  } from "sveltestrap";
  import AgeFilter from "./AgeFilter.svelte";
  import LocalOnlyFilter from "./LocalOnlyFilter.svelte";
  import SeasonFilter from "./SeasonFilter.svelte";
  import SportsFilter from "./SportsFilter.svelte";

  let isOpen = false;
  const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

{#if !isOpen}
  <Button on:click={toggleOpen}>Filter</Button>
{:else}
  <Collapse isOpen={true}>
    <div>
      <Card>
        <CardBody>
          <TabContent>
            <TabPane tabId="sports" tab="Sports" active>
              <SportsFilter />
            </TabPane>
            <TabPane tabId="age" tab="Age">
              <AgeFilter />
            </TabPane>
            <TabPane tabId="season" tab="Location & Season">
              <Row>
                <Col>
                  <LocalOnlyFilter />
                </Col>
                <Col>
                  <SeasonFilter />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <Button on:click={toggleOpen}>Filter</Button>
        </CardBody>
      </Card>
    </div>
  </Collapse>
{/if}
