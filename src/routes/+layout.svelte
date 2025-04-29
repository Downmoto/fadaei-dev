<script lang="ts">
  let { data, children } = $props();
  let isMenuOpen = $state(false)

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="layout-container">
  <nav>
    <a href="/" class="logo">Fadaei</a>
    <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
      <img src="hamburger.svg" alt="Menu" width="24" height="24" />
    </button>
    <ul class:open={isMenuOpen}>
      <li><a href="/">Home</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>

  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(body) {
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
    padding: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    position: relative;
  }

  .logo {
    margin-right: auto;
    text-decoration: none;
    color: #fff;
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

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    ul {
      display: none;
    }
  }
</style>
