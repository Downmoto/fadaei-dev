<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div class="center">
  <div class="about-container" in:fade>
    <div class="about-intro">
      <h1>I'm Arad.</h1>
      <p>I like to make <a href="/projects">stuff</a>.</p>
    </div>

    <div class="about-skills">
      <h2>Skills</h2>
      <div class="skills-section">
        <div class="skill">
          <h3 style:margin="0">Technologies</h3>
          <ul>
            <li>NodeJS, NextJS</li>
            <li>Svelte, React, Flutter</li>
            <li>Xcode, AndroidStudio</li>
          </ul>
        </div>

        <div class="skill">
          <h3 style:margin="0">Languages</h3>
          <ul>
            <li>JavaScript, TypeScript</li>
            <li>Rust, C, C++</li>
            <li>Python, Dart, Swift, Kotlin</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="about-cta">
      <h2>My Links.</h2>
      <p>Email me: <a href="mailto:arad@fadaei.dev" class="btn">arad@fadaei.dev</a></p>
      <p>Github: <a href="https://github.com/Downmoto" class="btn">@Downmoto</a></p>
      <p>LinkedIn: <a href="/about" class="btn">NOTHING HERE YET!</a></p>
    </div>
  </div>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-section {
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style-type: none; /* Remove default dots */
    padding-left: 0; /* Remove default padding */
    margin-top: 10px;
  }

  ul li {
    position: relative;
    padding-left: 1.5rem; /* Add space for the dash */
  }

  ul li::before {
    content: '-'; /* Add a dash before each list item */
    position: absolute;
    left: 0; /* Align the dash to the left */
    color: white; /* Match the text color */
  }

  h1 {
      margin: 0;
  }

  p {
    margin-bottom: 1rem;
  }

  .about-intro {

    p {
      margin: 0;
    }
  }

  .about-intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    color: white;
  }
</style>
