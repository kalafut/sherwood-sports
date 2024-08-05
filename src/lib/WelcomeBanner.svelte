<script>
  const welcomeAlertVersion = "2";
  const welcomeAlert = document.getElementById("welcome-alert");

  let welcomeAlertShown = localStorage.welcomeAlertShown == welcomeAlertVersion;

  const closeHandler = () => {
    localStorage.welcomeAlertShown = welcomeAlertVersion;
  };
</script>

{#if !welcomeAlertShown}
  <div id="welcome-alert" class="fs-5 alert alert-info alert-dismissible fade show" role="alert">
    <p>
      Thanks for visiting <span class="fw-bold">Sherwood Sports</span>!
    </p>
    <p>
      Skim through the <a href="#about">About</a> page for an intro, or just browse around! If you have issues or
      questions, please
      <a href="mailto:jim@kalafut.net">reach out</a>.
    </p>
    Enjoy!
    <button type="button" class="btn-close" on:click={closeHandler} data-bs-dismiss="alert" aria-label="Close" />
  </div>
{/if}
