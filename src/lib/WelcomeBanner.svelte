<script>
  const welcomeAlert = document.getElementById("welcome-alert");

  let welcomeAlertShown = localStorage.welcomeAlertShown == "1";

  const closeHandler = () => {
    localStorage.welcomeAlertShown = "1";
  };
</script>

{#if !welcomeAlertShown}
  <div
    id="welcome-alert"
    class="fs-5 alert alert-info alert-dismissible fade show"
    role="alert">
    <p>
      Thanks for visiting <span class="fw-bold">Sherwood Sports</span>!
    </p>

    <p>
      The site just launched, so data is still be added and little bugs worked
      out. If you have issues or questions, please
      <a href="#contribute">reach out</a>.
    </p>
    Enjoy!
    <button
      type="button"
      class="btn-close"
      on:click={closeHandler}
      data-bs-dismiss="alert"
      aria-label="Close" />
  </div>
{/if}
