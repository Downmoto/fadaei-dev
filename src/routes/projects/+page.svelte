<script lang="ts">
  import ProjectCard from '$lib/ProjectCard.svelte';
  import { fade } from 'svelte/transition';

  let { data } = $props();

  // Example projects array
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'hero.jpg',
      link: '/project1'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      imageUrl: 'hero.jpg',
      link: '/project2'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'hero.jpg',
      link: '/project3'
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'hero.jpg',
      link: '/project3'
    }
  ];
</script>

<div class="container" in:fade>
  {#each projects as project}
    <ProjectCard
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      link={project.link}
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
