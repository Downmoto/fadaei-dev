<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="project-container" in:fade>
	<div class="left">
		<h1>{data.title}</h1>
	</div>
	<div class="right">

  <div class="project-content"><div>{@html data.content}</div></div>
	</div>
</div>

<style>
	.project-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: auto;
		gap: 1rem;
	}

	.left {
		height: 100%;
		display: flex;
	}

	.left h1 {
		margin: 0;
	}

	.right {
		height: 100%;
		display: flex;
	}

  h1 {
    font-size: 2rem;
    color: white;
    margin-bottom: 1rem;
  }

  .project-content {
    width: 100%;
    max-width: 600px;
  }
</style>
