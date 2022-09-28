<script>
  import OrgDirectory from "./OrgDirectory.svelte";
  import BackLink from "./BackLink.svelte";
</script>

<BackLink />

<h4 class="my-2">Who runs this?</h4>
<p>
  This site is a volunteer effort by me (Jim). All of the data for the site is
  curated manually from each organization website (or Facebook page, or whatever
  they have). You may have noticed that some of these sites aren't kept up, can
  be a challenge to navigate, or link out to third party registration sites. A
  steady effort is needed to keep data on Sherwood Sports up-to-date, and I
  welcome your help!
</p>

<p>You can reach a out a few ways with questions or contributions:</p>
<ul>
  <li>
    Email: <a href="mailto:jim@sherwoodsports.org">jim@sherwoodsports.org</a>
  </li>
  <li>Google Feedback form (optionally anonymous)</li>
  <li>
    <a href="https://github.com/kalafut/sherwood-sports">GitHub</a> (much more technical)
  </li>
</ul>

<h4 class="my-4">Ways to contribute</h4>
<p>
  <strong>Discovery.</strong>
  Have I missed some organizations, or have new ones opened up? Please let me know
  about them!
</p>

<p>
  <strong>Data freshness</strong>. Please report any errors, broken links, or
  info to help fill in the cards for the listed programs. It is also really
  helpful to hear that the information is
  <span class="fst-italic">correct</span>! The table below lists when an
  organization was last reviewed. Consider verifying one of the sites that
  hasn't been reviewed in a while and letting me know if it is still accurate.
</p>

<p>
  <strong>General Feedback</strong>. Are there bugs with the site itself, or
  ways it could work better? It is completely custom so let me know what ideas
  you have for how I can improve it.
</p>

<p>
  <button
    class="btn btn-primary mt-4"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseExample"
    aria-expanded="false"
    aria-controls="collapseExample">
    Review History
  </button>
</p>
<div class="collapse" id="collapseExample">
  <h4 class="mt-4">Organization Reviews</h4>
  <OrgDirectory />
</div>
