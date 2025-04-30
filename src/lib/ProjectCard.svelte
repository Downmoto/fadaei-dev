<script lang="ts">
  let {
    title,
    description,
    imageUrl,
    link
  }: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  } = $props();
</script>

<a class="card-container" href={link}>
  <img src={imageUrl} alt={title} />
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
    border-radius: 8px;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 10rem;
    aspect-ratio: 5/3;
    border-radius: 8px;
    object-fit: cover;
  }

  .text-container {
    text-align: left;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  .description {
    font-size: 1rem;
    color: #666;
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

    img {
      width: 100%;
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
