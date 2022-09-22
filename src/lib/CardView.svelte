<script>
  import {
    currentMonth,
    monthStr,
    monthInRange,
    ordinal,
    isUpcoming,
  } from "../util";
  //import { Org, Program } from "../types";
  import * as consts from "../consts";
  import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
  } from "sveltestrap";
  import { flush } from "svelte/internal";
  import Season from "./Season.svelte";
  import AgeBadge from "./AgeBadge.svelte";
  import hash from "object-hash";

  export let orgs;

  const m = currentMonth();
</script>

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
  {#each orgs as org (hash(org))}
    <Col>
      <Card>
        <CardBody>
          <CardTitle>
            <div class="d-flex justify-content-between">
              <a href={org.url}>{org.name}</a>
              <span class="fw-bold fs-6 text-danger">
                {org.location ? org.location : ""}
              </span>
            </div>
          </CardTitle>
          <CardText>Some intro text about the organization.</CardText>
          <ListGroup flush>
            {#each org.programs as program (hash(program))}
              <ListGroupItem
                color={isUpcoming(m, program.season) ? "warning" : ""}
                class="d-flex align-items-start justify-content-between"
              >
                <Col class="d-flex align-items-start justify-content-start">
                  {#if program.url}
                    <a href={program.url}>{program.name}</a>
                  {:else}
                    {program.name}
                  {/if}
                </Col>
                <Col class="d-flex align-items-start justify-content-end">
                  <Col class="d-flex justify-content-end">
                    <Season {program} />
                  </Col>
                  <Col class="d-flex justify-content-end">
                    <AgeBadge {program} />
                  </Col>
                </Col>
              </ListGroupItem>
            {/each}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  {/each}
</div>
