<script lang="ts">
  let { children } = $props();
</script>

<div class="layout-container">
  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(:root) {
    --mono-dark: #3c3d3d;
    --mono-light: #ded3cb;
    --mono-dark-rgb: 60, 61, 61;
    --mono-light-rgb: 222, 211, 203;
    --page-bg: var(--mono-dark);
    --page-text: var(--mono-light);
  }

  :global(body) {
    margin: 0;
    color: var(--page-text);
    background: var(--page-bg);
    font-family: Roboto, Arial, sans-serif;
    min-height: 100vh;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .layout-container {
    min-height: 100vh;
    padding: 1rem;
  }
</style>
