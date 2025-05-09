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

<ul class={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
  <li><a href="/" onclick={() => (isMenuOpen = false)}>HOME</a></li>
  <li><a href="/projects" onclick={() => (isMenuOpen = false)}>PROJECTS</a></li>
  <li><a href="/about" onclick={() => (isMenuOpen = false)}>ABOUT</a></li>
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

  /* New style for dropdown */
  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 1rem;
    background-color: #1a1a1a;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    padding: 1rem;
    z-index: 1000;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .mobile-menu.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-menu li {
    margin-bottom: 0.75rem;
  }

  .mobile-menu li:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
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

  @media (min-width: 601px) {
    .mobile-menu {
      display: flex !important;
      position: static;
      flex-direction: row;
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      transform: none;
      opacity: 1;
      transition: none;
    }

    .mobile-menu li {
      margin: 0;
    }
  }
</style>
