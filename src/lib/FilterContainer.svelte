<script>
  import {
    Card,
    CardBody,
    CardHeader,
    Collapse,
    Nav,
    NavLink,
    NavItem,
    TabPane,
    TabContent,
    Button,
  } from "sveltestrap";
  import LocalOnlyFilter from "./LocalOnlyFilter.svelte";

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
              SportFilter
              <!-- <SportFilter {sports} /> -->
            </TabPane>
            <TabPane tabId="age" tab="Age">
              Age Range
              <!-- <AgeRangeSlider /> -->
            </TabPane>
            <TabPane tabId="season" tab="Location">
              <LocalOnlyFilter />
            </TabPane>
            <!-- {toggleButton} -->
          </TabContent>
          <Button on:click={toggleOpen}>Filter</Button>
        </CardBody>
      </Card>
    </div>
  </Collapse>
{/if}

<!-- <TabContent pills>
  <TabPane tabId="alpha" tab="Alpha" active>
    <img
      alt="Alpha Flight"
      src="https://upload.wikimedia.org/wikipedia/en/4/49/Alpha_Flight_cast_picture_%28John_Byrne_era%29.gif"
    />
  </TabPane>
  <TabPane tabId="bravo" tab="Bravo">
    <img
      alt="Johnny Bravo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Johnny_Bravo_series_logo.png/320px-Johnny_Bravo_series_logo.png"
    />
  </TabPane>
  <TabPane tabId="charlie" tab="Charlie" disabled>
    <img
      alt="Charlie Brown"
      src="https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png"
    />
  </TabPane>
</TabContent> -->
