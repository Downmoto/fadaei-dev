<script lang="ts">
  let {
    title,
    description,
    link
  }: {
    title: string;
    description: string;
    link: string;
  } = $props();
</script>

<a class="card-container" href={link}>
  <div class="text-container">
    <h1>{title}</h1>
    <h2 class="description">{description}</h2>
  </div>
</a>

<style>
  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
    max-width: 40rem;
    height: auto;
    padding: 1rem;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    border-radius: 20px;
    transition: box-shadow 1s ease;
  }

  .card-container:hover {
    border-radius: 20px;
    background: linear-gradient(145deg, #2f4d2f, #385b38);
    box-shadow:
      13px 13px 25px #2a442a,
      -13px -13px 25px #3e663e;
    transition: box-shadow 1s ease;
  }

  .text-container {
    text-align: left;
    transition: transform 1s ease;
  }

  .text-container:hover {
    transform: scale(1.005);
    transition: transform 1s ease;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  .description {
    font-size: 1rem;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 600px) {
    .card-container {
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }

    .text-container {
      text-align: center;
      width: 100%;
    }

    .description {
      overflow: visible;
      text-overflow: unset;
      display: block;
      -webkit-line-clamp: unset;
      line-clamp: unset;
      -webkit-box-orient: unset;
    }
  }
</style>
