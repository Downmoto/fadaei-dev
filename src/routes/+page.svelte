<script lang="ts">
  import { mlProjects, projects } from '$lib/projectsData';

  function sanitizeLink(link: string): string {
    try {
      const url = new URL(link);
      const host = url.hostname.replace('www.', '');
      return host.split('.')[0];
    } catch {
      return link;
    }
  }
</script>

<svelte:head>
  <title>fadaei.dev</title>
  <meta
    name="description"
    content="single-page portfolio for arad fadaei with projects, bio, and contact links."
  />
</svelte:head>

<div class="page-wrap">
  <section id="home" class="panel hero">
    <h1>Arad Fadaei</h1>
    <p>
      Developer focused on useful software, clean implementation, and practical interfaces.
    </p>
    <div class="columns">
      <div>
        <h3>Stack</h3>
        <ul>
          <li>Node.js, Next.js, Svelte, React</li>
          <li>Flutter, Xcode, Android Studio</li>
          <li>TypeScript, Rust, Python, C/C++</li>
        </ul>
      </div>
      <div>
        <h3>Working Style</h3>
        <ul>
          <li>Ship small, iterate fast</li>
          <li>Prefer useful over shiny</li>
          <li>Write for humans first</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="projects" class="panel">
    <h2>Projects</h2>
    <div class="project-list">
      {#each projects as project}
        <article id={`project-${project.slug}`} class="project-item panel-subtle">
          <header>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </header>
          <div class="links">
            {#each project.links as link}
              <a href={link} target="_blank" rel="noreferrer">{sanitizeLink(link)}</a>
            {/each}
          </div>
          <details>
            <summary>details</summary>
            <div class="project-content">{@html project.content}</div>
          </details>
        </article>
      {/each}
    </div>
  </section>

  <section id="ml-projects" class="panel">
    <h2>Machine Learning Projects</h2>
    <div class="project-list">
      {#each mlProjects as project}
        <article id={`project-${project.slug}`} class="project-item panel-subtle">
          <header>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </header>
          <div class="links">
            <a href={project.link} target="_blank" rel="noreferrer">{sanitizeLink(project.link)}</a>
          </div>
          <details>
            <summary>details</summary>
            <div class="project-content">{@html project.content}</div>
          </details>
        </article>
      {/each}
    </div>
  </section>

  <section id="contact" class="panel">
    <h2>Contact</h2>
    <ul class="contact-list">
      <li><a href="mailto:arad@fadaei.dev">arad@fadaei.dev</a></li>
      <li><a href="https://github.com/Downmoto" target="_blank" rel="noreferrer">github.com/downmoto</a></li>
      <li>
        <a href="https://www.linkedin.com/in/arad-fadaei-a84484308/" target="_blank" rel="noreferrer"
          >linkedin profile</a
        >
      </li>
    </ul>
  </section>
</div>

<style>
  .page-wrap {
    --section-gap: 3rem;
    display: flex;
    flex-direction: column;
    gap: var(--section-gap);
    width: min(52rem, 100%);
    margin: 0 auto;
    padding: 0.5rem 0 2.5rem;
  }

  .panel {
    border: 0;
    border-radius: 0;
    background: transparent;
    padding: 0;
  }

  .panel-subtle {
    border: 0;
    border-left: 1px solid rgba(var(--mono-light-rgb), 0.2);
    border-radius: 0;
    background: transparent;
    padding: 0.1rem 0 0.1rem 0.9rem;
  }

  .hero h1 {
    margin: 0;
    font-size: clamp(2rem, 6vw, 2.8rem);
    color: var(--page-text);
    font-weight: 400;
    letter-spacing: 0.005em;
  }

  h2 {
    margin: 0 0 0.85rem;
    font-size: 1.05rem;
    color: var(--page-text);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--page-text);
    font-weight: 400;
  }

  p,
  li,
  a,
  summary {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--page-text);
  }

  .project-list {
    display: grid;
    gap: 1.1rem;
    margin-top: 0.15rem;
  }

  .project-item header p {
    margin: 0.25rem 0 0;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin: 0.45rem 0 0.5rem;
  }

  .links a,
  .contact-list a {
    color: var(--page-text);
    text-decoration: none;
    opacity: 0.92;
  }

  .links a:hover,
  .contact-list a:hover {
    text-decoration: underline;
    opacity: 1;
  }

  details {
    border: 0;
    border-top: 1px solid rgba(var(--mono-light-rgb), 0.18);
    border-radius: 0;
    padding: 0.45rem 0 0;
    background: transparent;
  }

  summary {
    cursor: pointer;
    color: var(--page-text);
  }

  .project-content :global(section) {
    margin-top: 0.4rem;
  }

  .project-content :global(p) {
    margin: 0.45rem 0;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  ul {
    margin: 0.35rem 0 0;
    padding-left: 1.1rem;
  }

  .contact-list {
    list-style: disc;
    padding-left: 1rem;
  }

  .project-content :global(p) {
    opacity: 0.92;
  }

  @media (max-width: 760px) {
    .columns {
      grid-template-columns: 1fr;
    }

    p,
    li,
    a,
    summary {
      font-size: 0.98rem;
    }

    .panel {
      padding: 0;
    }
  }
</style>
