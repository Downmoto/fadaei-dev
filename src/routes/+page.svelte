<script lang="ts">
  import { fade } from 'svelte/transition';
  import heroImage from '$lib/public/hero.jpg'
  import nameSVG from '$lib/public/homeTextCondensed.svg'
</script>

<svelte:head>
  <title>Arad Fadaei</title>
  <meta
    name="description"
    content="Welcome to Arad Fadaei's personal website. Explore projects, insights, and more about Arad's journey in development and technology."
  />
</svelte:head>

<div class="container" in:fade>
  <div class="name">
    <img src={nameSVG} alt="Arad Fadaei" />
  </div>
  <a href="/projects">
    <img src={heroImage} alt="Abstract, floating boxes" />
  </a>
</div>

<style>
  /* Container Styles */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #000;
    margin: 0;
    overflow: hidden;
    opacity: 1;
  }

  /* Link Styles */
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    pointer-events: auto;
  }

  /* Image Styles */
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .container img:hover {
    transform: scale(1.1);
  }

  /* Responsive Styles */
  @media (max-width: 480px) {
    .container a {
      width: 90%;
    }
  }

  /* Name Section Styles */
  .name {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    pointer-events: none;
  }

  .name img {
    filter: invert(1);
    width: 40rem;
    height: auto;
    opacity: 0.4;
  }
</style>
