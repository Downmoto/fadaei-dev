<script lang="ts">
  let imageUrl: string = 'hero.jpg';
</script>

<svelte:head>
  <title>Arad Fadaei</title>
  <meta
    name="description"
    content="Welcome to Arad Fadaei's personal website. Explore projects, insights, and more about Arad's journey in development and technology."
  />
</svelte:head>

<div class="container">
  <img src={imageUrl} alt="Abstract, floating boxes" />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #000;
    margin: 0;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    width: 50%;
  }

  @media (max-width: 480px) {
    img {
      width: 75%;
    }
  }
</style>
