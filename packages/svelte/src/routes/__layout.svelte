<script>
  import { Button, Card, CardBody, Checkbox, Col, Icon, Row } from "$lib";

  let sidebarOpen = false;

  const toggleSidebar = () => sidebarOpen = !sidebarOpen;

  let dark = false;
</script>

<Row class="page {dark ? 'dark' : ''}">
  <Col col="12" class="flex items-center justify-between header z-3">
    <div class="flex items-center justify-start">
        <div class="flex sm:hidden">

            <Button size="sm" on:click={toggleSidebar} square>
                <Icon icon="la:bars" />    
            </Button>
        </div>
        <h1 class="text-muted">
            <a href="/">
                Svind Components
            </a>
        </h1>
    </div>

    <Checkbox bind:value={dark}>
      Dark
    </Checkbox>
  </Col>
  <Col col={{ xs: 0, sm: 4, md: 3, lg: 2 }} class="sidebar {sidebarOpen ? 'open' : 'close'} sm:flex">
    <ul class="menu">
      <li class="menu-title text-muted">Components</li>
      <ul>
        <li class="menu-item"><a href="/components/badge">Badge</a></li>
        <li class="menu-item"><a href="/components/button">Button</a></li>
        <li class="menu-item"><a href="/components/card">Card</a></li>
        <li class="menu-item"><a href="/components/form">Form</a></li>
        <li class="menu-item"><a href="/components/input">Input</a></li>
        <li class="menu-item"><a href="/components/z">Z index</a></li>
      </ul>
    </ul>
  </Col>
  <Col col="auto" offset={{ sm: 4, md: 3, lg: 2 }} class="p-2 main">
    <Card z="1">
      <CardBody>
        <slot />
      </CardBody>
    </Card>
  </Col>
</Row>


<style lang="scss" global>
  @import "@svind/css/src/index.scss";

  html,
  body {
    height: 100%;
  }

  .header {
    position: fixed;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    height: 56px;

    background-color: get-color(color('light'));

    .dark & {
      background-color: get-color(color('dark'));
    }

    & h1 {
        font-size: 1.5rem;
        margin-left: 0.5rem;
    }
  }

  .sidebar {
      
    margin-top: 56px;
    position: fixed;

    &.close {
        display: none;
        height: 0px;

        @include breakpoint('sm') {
            display: flex;
        }
    }
    &.open {
        width: 100%;
        height: 100%;
        z-index: 4;
        background-color: #{color('light')};
        .dark & {
            background-color: #{color('dark')};
        }
    }
  }

  .page {
    margin: 0;
    min-height: 100vh;
  }

  .main {
    margin-top: 56px;
    width: 100%;
    height: 100%;
  }

  .menu {
    width: 100%;
    height: 100%;

    & .menu-title {
      padding: 0.5rem;
    }
    & .menu-item {
      list-style-type: none;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      width: 100%;

      &:hover {
        background-color: #7772;
      }
    }
  }
</style>
