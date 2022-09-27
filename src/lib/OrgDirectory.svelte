<script>
  import { orgs } from "../data";
  import CardText from "svelte-bootstrap-icons/lib/CardText.svelte";
  import ReviewNote from "./ReviewNote.svelte";

  const orgsCopy = [...orgs];
  orgsCopy.sort((a, b) => {
    if (!a.reviewed) {
      return -1;
    } else if (!b.reviewed) {
      return 1;
    }
    return a.reviewed.localeCompare(b.reviewed);
  });
</script>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Organization</th>
      <th scope="col">Reviewed</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    {#each orgsCopy as org}
      <tr>
        <td><a href={org.url}>{org.name}</a></td>
        <td>{org.reviewed || ""}</td>
        <td>
          {#if org.reviewNotes}
            <span data-bs-toggle="modal" data-bs-target="#exampleModal">
              <CardText />
              <ReviewNote title={org.name} body={org.reviewNotes} />
            </span>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
