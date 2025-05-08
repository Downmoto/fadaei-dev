<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  function sanitizeLink(link: string): string {
    try {
      const url = new URL(link);
      const hostname = url.hostname;
      return hostname.startsWith('www.') ? hostname.slice(4).split('.')[0] : hostname.split('.')[0];
    } catch (error) {
      console.error('Invalid URL:', link);
      return link;
    }
  }
</script>

<div class="project-container" in:fade>
  <div class="top">
    <h1>{data.title}</h1>
    <div class="links">
      {#each data.links as link}
        <a href={link}>{sanitizeLink(link)}</a>
      {/each}
    </div>
  </div>
  <div class="bottom">
    <div class="project-content"><div>{@html data.content}</div></div>
  </div>
</div>

<style>
  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 1rem;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: .5rem;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
  }

  h1 {
    font-size: 2rem;
    color: white;
    margin: 0;
  }

  .project-content {
    width: 100%;
    max-width: 600px;
  }

  .project-content :global {
    a {
      color: white;
    }

    p {
      text-align: justify;
    }
  }
</style>
