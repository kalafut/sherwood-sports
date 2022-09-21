<script>
  import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
  } from "sveltestrap";
  import { page } from "../stores";

  let isOpen = true;
  const toggle = () => (isOpen = !isOpen);
  const setPage = (newPage) => {
    page.set(newPage);
  };
</script>

<Navbar dark color="dark" expand="lg">
  <NavbarBrand href="/">Sherwood Sports</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav class="me-auto" navbar>
      <NavItem>
        <NavLink on:click={() => setPage("dashboard")}>Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Directory</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={() => setPage("about")}>About the site</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
