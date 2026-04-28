<script lang="ts">
  import { onMount } from 'svelte';

  type ThemeSet = {
    dark: string;
    light: string;
  };

  const approvedThemeSets: ThemeSet[] = [
    {
      dark: '#3c3d3d',
      light: '#ded3cb'
    },
    {
      dark: '#161717',
      light: '#dfcf11'
    },
    {
      dark: '#042d1d',
      light: '#f4d29b'
    },
    {
      dark: '#2d2c47',
      light: '#9ec9ca'
    },
    {
      dark: '#2d2c47',
      light: '#e9c9a3'
    },
  ];

  function applyRandomThemeSet() {
    if (approvedThemeSets.length === 0) return;

    const randomIndex = Math.floor(Math.random() * approvedThemeSets.length);
    const selected = approvedThemeSets[randomIndex];
    const root = document.documentElement;

    root.style.setProperty('--mono-dark', selected.dark);
    root.style.setProperty('--mono-light', selected.light);
  }

  onMount(() => {
    applyRandomThemeSet();
  });

  let { children } = $props();
</script>

<a class="skip-link" href="#main-content">skip to main content</a>
<div class="layout-container">
  <main id="main-content" tabindex="-1">
    {@render children()}
  </main>
</div>

<style>
  :global(:root) {
    --mono-dark: #3c3d3d;
    --mono-light: #ded3cb;
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

  :global(a:focus-visible),
  :global(button:focus-visible),
  :global(summary:focus-visible) {
    outline: 2px solid var(--page-text);
    outline-offset: 2px;
  }

  .skip-link {
    position: absolute;
    left: -9999px;
    top: 0.5rem;
    z-index: 100;
    padding: 0.5rem 0.75rem;
    color: var(--page-bg);
    background: var(--page-text);
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.95rem;
  }

  .skip-link:focus {
    left: 0.75rem;
  }

  .layout-container {
    min-height: 100vh;
    padding: 1rem;
  }
</style>
