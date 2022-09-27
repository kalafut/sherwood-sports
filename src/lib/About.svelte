<script>
  import QuestionCircle from "svelte-bootstrap-icons/lib/QuestionCircle.svelte";
</script>

<div>
  <h4>Welcome!</h4>
  <p>
    When we moved to <a href="https://www.sherwoodoregon.gov/">Sherwood</a>, we
    struggled finding sports activities for our kids. The city does provide
    links to some
    <a
      href="https://www.sherwoodoregon.gov/community/page/sherwood-youth-sports">
      Sherwood-based organizations</a
    >, but knowing in detail what is available and when you need to sign up is
    chore. Information is spread across dozens of websites, and often we'd learn
    what was coming up via word-of-mouth, or by being in a certain Facebook
    group. And some programs are only available in nearby communities.
  </p>
  <p>
    The goal of <span class="fw-bold fs-6">Sherwood Sports</span> is to pull key
    information about sports programs into one convenient dashboard. Find what
    you're looking for quickly, and know when to sign up. With your help and the
    power of
    <a href="https://en.wikipedia.org/wiki/Crowdsourcing"> crowdsourcing </a>
    we can build a comprehensive, up-to-date resource for the community.
  </p>
  <h4 class="mt-4">Using the Dashboard</h4>
  Each card in the dashboard provides some or all of:
  <ul>
    <li>
      Links to the organization's homepage, and possibly links to individual
      programs if available.
    </li>
    <li>
      Dates when the season runs, or "Year round". If a row <span
        class="bg-success bg-opacity-25">
        &nbsp;is highlighted green
      </span>, it means that the season starts within 2 months so you may want
      to look into registering.
    </li>
    <li>
      Age ranges, either in years <span
        class={`badge rounded-pill text-bg-primary`}>6-10</span>
      or grades <span class={`badge rounded-pill text-bg-info`}>3rd–12th</span>.
    </li>
    <li>
      If the organization is <strong>not</strong> based in Sherwood, the location
      will be shown.
    </li>
  </ul>

  A <QuestionCircle /> means I don't have that information. If you can help fill
  in those gaps, <a href="#contribute">please let me know</a>.

  <h4 class="mt-4">What sports/clubs are included?</h4>
  <p>
    The site track sports programs based primarily Sherwood, but also includes
    some nearby groups if they fill a gap. For example, Tualatin's MVP Sports
    offers flag football through 8th grade, whereas Sherwood's club stops at
    4th.
  </p>
  <p>
    The following are specifically <strong>not</strong> included at this time:
  </p>
  <ul>
    <li>Non-sport clubs and activities</li>
    <li>School and YMCA programs (consult their catalogs)</li>
    <li>Individual trainers</li>
  </ul>
  <h4 class="mt-4">How you can help</h4>
  <p>
    This site will work best with support from the community. Please visit the <a
      href="#contribute">Contribute</a> page for more details on how the site is
    maintained and ways you can help.
  </p>
</div>
