<script>
  // import "$lib/scss/index.scss";

  import {
    Card,
    Page,
    PageBody,
    PageHeader,
    PageTitle,
    PageSubtitle,
    Button,
    Col,
    Row,
    CardBody,
    NavBrand,
    Sidebar,
    PageWrapper,
    Header,
    NavbarToggler,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    MenuItem,
    Dropdown,
    Icon,
    MenuTitle,
  } from "$lib/components";
  import { page } from "$app/stores";

  let sidebarId = "sidebar-1";

  let dark = false;

  $: pathname = $page.url.pathname;
</script>

<Page class="bg-base" {dark}>
  <Sidebar id={sidebarId} expand="lg">
    <NavBrand>Svind</NavBrand>
    <Menu>
      <MenuTitle>Sidebar</MenuTitle>
      <MenuItem active={pathname === "/home"} href="/home">
        <Icon icon="fa-solid:home" />
        Home
      </MenuItem>
      <MenuItem active={pathname === "/playground"} href="/playground"
        >Playground</MenuItem
      >
      <Dropdown active={pathname.startsWith("/components/")}>
        <MenuItem slot="target">Components</MenuItem>
        <Menu>
          <MenuItem
            active={pathname === "/components/avatar"}
            href="/components/avatar">avatar</MenuItem
          >
          <MenuItem
            active={pathname === "/components/badge"}
            href="/components/badge">Badge</MenuItem
          >
          <MenuItem
            active={pathname === "/components/button"}
            href="/components/button">Button</MenuItem
          >
          <MenuTitle>More</MenuTitle>
          <MenuItem
            active={pathname === "/components/card"}
            href="/components/card">Card</MenuItem
          >
          <MenuItem
            active={pathname === "/components/dropdown"}
            href="/components/dropdown">dropdown</MenuItem
          >
          <MenuItem
            active={pathname === "/components/form"}
            href="/components/form">Form</MenuItem
          >
          <MenuItem
            active={pathname === "/components/grid"}
            href="/components/grid">grid</MenuItem
          >
          <MenuItem
            active={pathname === "/components/input"}
            href="/components/input">Input</MenuItem
          >
          <MenuItem
            active={pathname === "/components/menu"}
            href="/components/menu">menu</MenuItem
          >
          <MenuItem
            active={pathname === "/components/modal"}
            href="/components/modal">Modal</MenuItem
          >
          <MenuItem active={pathname === "/components/z"} href="/components/z"
            >Z index</MenuItem
          >
        </Menu>
      </Dropdown>
    </Menu>
  </Sidebar>
  <PageWrapper>
    <Header>
      <NavbarToggler target={sidebarId} />

      <Menu>
        <MenuItem>
          <Dropdown autoClose open>
            <span slot="target">Dropdown</span>
            <Menu>
              <MenuItem>first</MenuItem>
              <MenuItem>second</MenuItem>
              <MenuItem>third</MenuItem>
            </Menu>
          </Dropdown>
        </MenuItem>

        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu>
    </Header>
    <PageHeader>
      <Breadcrumb>
        {#each pathname.split("/") as path, index}
          {@const name = path === "" ? "Home" : path}
          {@const href =
            path === ""
              ? "/"
              : pathname
                  .split("/")
                  .slice(1, index + 1)
                  .join("/")}
          <BreadcrumbItem {href}>
            {name}
          </BreadcrumbItem>
        {/each}
      </Breadcrumb>
      <Row>
        <Col col="expand">
          <PageTitle>svind</PageTitle>
          <PageSubtitle>Subtitle</PageSubtitle>
        </Col>
        <Col col="auto">
          <Button  on:click={() => (dark = !dark)}>Toggle Dark</Button>
        </Col>
      </Row>
    </PageHeader>
    <PageBody>
      <Card>
        <CardBody>
          <slot />
        </CardBody>
      </Card>
    </PageBody>
  </PageWrapper>
</Page>
<!-- 
<style lang="scss" global>
  .menu-item {
    color: var(--base-content);
  }
  .navbar-sidebar .menu {
    border: none;
    padding: 0;
    box-shadow: none;
  }
  .navbar-header > .menu {
    overflow: visible;
    background-color: transparent;
    align-items: stretch;

    & .dropdown .dropdown-content {
      min-width: 200px;
      margin-top: 0.75rem;
      padding-left: 0;
    }
  }

  .dropdown .menu {
    box-shadow: 0 2px 1rem -0.5rem #00000080;
  }
</style> -->
