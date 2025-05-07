<script lang="ts">
  import ProjectCard from '$lib/ProjectCard.svelte';
  import { fade } from 'svelte/transition';
  import { projects } from '$lib/projectsData';
  import { onDestroy, onMount } from 'svelte';

  if (typeof window !== 'undefined') {
    onMount(() => {
      document.body.style.backgroundColor = '#345534';
    });

    onDestroy(() => {
      document.body.style.backgroundColor = '#000';
    });
  }
</script>

<div class="container" in:fade>
  {#each projects as project}
    <ProjectCard
      title={project.title}
      description={project.description}
      link="projects/{project.slug}"
    />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    margin: 0;
  }

  @media (max-width: 600px) {
    .container {
      justify-content: flex-start;
    }
  }
</style>
