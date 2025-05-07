<script lang="ts">
  import hamburgerSVG from '$lib/public/hamburger.svg'
  let { children } = $props();
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="layout-container">
  <nav>
    <a href="/" class="logo">FADAEI</a>
    <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
      <img src={hamburgerSVG} alt="Menu" width="24" height="24" />
    </button>
    <ul class:open={isMenuOpen}>
      <li><a href="/">HOME</a></li>
      <li><a href="/projects">PROJECTS</a></li>
      <li><a href="/about">ABOUT</a></li>
    </ul>
  </nav>

  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(body) {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #000;
    color: #fff;
  }

  .layout-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  nav {
    color: #fff;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    position: relative;
  }

  .logo {
    margin-right: auto;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  .logo:hover {
    text-decoration: none;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    filter: invert(1);
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
  }

  ul.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  main {
    flex: 1;
    overflow: auto;
  }

  @media (max-width: 600px) {
    .hamburger {
      display: flex;
    }

    ul {
      display: none;
    }
  }
</style>
