<script>
  import { page } from "../stores";

  let isOpen = true;
  const toggle = () => (isOpen = !isOpen);
  const setPage = (newPage) => {
    page.set(newPage);
  };
</script>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sherwood Sports</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" on:click={() => setPage("dashboard")}
            >Dashboard</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" on:click={() => setPage("about")}
            >About</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
