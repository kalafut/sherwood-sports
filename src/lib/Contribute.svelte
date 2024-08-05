<script>
  import OrgDirectory from "./OrgDirectory.svelte";
  import BackLink from "./BackLink.svelte";
</script>

<BackLink />

<p>
  All of the data for the site is curated manually from each organization website (or Facebook page, or whatever they
  have). You may have noticed that some of these sites aren't kept up, can be a challenge to navigate, or link out to
  third party registration sites. A steady effort is needed to keep data on Sherwood Sports up-to-date, and I welcome
  your help!
</p>
<p>You can contact me via:</p>

<ul>
  <li>
    Email: <a href="mailto:jim@kalafut.net">jim@kalafut.net</a>
  </li>
  <li>
    Site project: <a href="https://github.com/kalafut/sherwood-sports"> GitHub </a> (much more technical)
  </li>
</ul>

<h4 class="my-4">Ways to contribute</h4>
<p>Any help is welcome. Here are some ideas:</p>
<p>
  <strong>Discovery.</strong>
  Have I missed some organizations, or have new ones opened up? Please let me know about them!
</p>

<p>
  <strong>Data freshness</strong>. Please report any errors, broken links, or info to help fill in the cards for the
  listed programs. It is also really helpful to hear that the information is
  <span class="fst-italic">correct</span>! The table below lists when an organization was last reviewed. Consider
  verifying one of the sites that hasn't been reviewed in a while and letting me know if it is still accurate.
</p>

<p>
  <strong>General Feedback</strong>. Are there bugs with the site itself, or ways it could work better? Maybe the design
  or UX could be improved? It is completely custom so let me know what ideas you have.
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
