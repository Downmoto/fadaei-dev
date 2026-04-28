interface Project {
  slug: string;
  title: string;
  description: string;
  links: string[];
  content: string;
}

interface MlProject {
  slug: string;
  title: string;
  description: string;
  link: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: 'pubsie',
    title: 'Pubsie',
    description: 'A JavaScript package for parsing EPUB files and extracting their contents.',
    links: ['https://github.com/Downmoto/pubsie', 'https://www.npmjs.com/package/pubsie'],
    content: `
<section>
  <p>
    Pubsie is an open-source Node.js library I developed to simplify the process of parsing EPUB files.
    It allows developers to efficiently extract essential components such as metadata, chapters,
    and other resources from EPUB files within JavaScript applications.
  </p>

  <p>
    The library features an event-driven architecture, providing robust error handling and facilitating
    asynchronous operations during the parsing process. To enhance performance, Pubsie includes a
    caching mechanism that stores parsed data, reducing the need for repeated parsing and improving
    data retrieval speed.
  </p>

  <p>
    In building Pubsie, I focused on compliance with EPUB specifications to ensure broad compatibility
    with standard-compliant files. The project is available on npm, complete with detailed documentation
    and usage examples to assist developers in integrating it into their applications.
  </p>
</section>
    `
  },
  {
    slug: 'moneymap',
    title: 'MoneyMap',
    description: 'Budgeting application with AI financial assistant',
    links: ['https://github.com/PRJ666Group1/MoneyMap'],
    content: `
<section>
  <p><em>Capstone Project | Team Lead & Scrum Master</em></p>

  <p>
    Moneymap is a full-stack personal finance tracking application developed as part of a capstone project.
    As the team lead and Scrum Master, I directed a team of developers and designers through the full Agile
    development process, from planning and architecture to final delivery.
  </p>

  <p>
    The core of Moneymap is an AI-powered assistant designed to help users make sense of their finances.
    Users can interact with the assistant to ask questions, get personalized insights, and receive
    context-aware summaries based on their spending habits, budgets, and trends. This conversational layer
    made financial data more accessible and actionable.
  </p>

  <p>
    In addition to leading sprints and team coordination, I contributed to both front-end and back-end development.
    The application features automated expense categorization, budget tracking, and data visualizations to give
    users a clear picture of their financial health. We conducted multiple rounds of usability testing to refine
    the interface and improve the user experience.
  </p>

  <p>
    Moneymap demonstrated our team's ability to integrate AI with financial tools to create a modern,
    responsive application that turns complex data into clear, useful guidance.
  </p>
</section>
    `
  },
  {
    slug: 'markdown',
    title: 'Markdown',
    description: 'Programmatically write markdown to a file with Python',
    links: ['https://github.com/Downmoto/markdown'],
    content: `
<section>
  <p>
    Markdown is a Python library I developed to facilitate the programmatic creation of Markdown files.
    This tool simplifies the process of generating structured Markdown content, making it particularly
    useful for automating documentation, reports, and other text-based outputs.
  </p>

  <p>
    The library provides methods to add various Markdown elements such as headings, paragraphs, blockquotes,
    and tables. Its design emphasizes modularity, allowing users to incorporate custom preprocessing functions
    to modify content dynamically before writing to a file.
  </p>

  <p>
    By leveraging Python's object-oriented capabilities, the library offers an intuitive API that developers
    can easily integrate into their workflows. Comprehensive documentation and examples are available on the
    project's GitHub repository, ensuring that users can quickly understand and utilize its features.
  </p>
</section>
    `
  }
];

export const mlProjects: MlProject[] = [
  {
    slug: 'nlp-phishguard',
    title: 'nlp-PhishGuard',
    description: 'Transformer-based phishing email classifier with token-level interpretability and CLI/web inference.',
    link: 'https://github.com/Downmoto/nlp-PhishGuard',
    content: `
<section>
  <p>
    NLP-PhishGuard is a supervised natural language processing project focused on phishing email detection.
    The core challenge addressed in this work is that many modern phishing messages are professionally written
    and semantically similar to legitimate business communication, making rule-based filtering alone
    unreliable in real-world settings.
  </p>

  <p>
    The pipeline was designed end-to-end to be reproducible and practical, covering ingestion of labeled
    corpora, preprocessing, stratified train-validation-test splitting, transformer fine-tuning,
    checkpointing, and final evaluation. This structure made it possible to measure generalization on held-out
    data while maintaining a clear engineering workflow for retraining and iteration.
  </p>

  <p>
    Beyond predictive performance, the project emphasizes interpretability and usability. Token-level
    attribution helps inspect why a message was flagged, and the final model is packaged for both command-line
    usage and lightweight web-based inference, making it easier to integrate into practical security workflows.
  </p>
</section>
    `
  },
  {
    slug: 'cv-spac',
    title: 'CV_SPAC',
    description: 'End-to-end ALPR system for parking access control with plate detection, OCR, and resident matching.',
    link: 'https://github.com/Downmoto/CV_SPAC',
    content: `
<section>
  <p>
    CV_SPAC is an end-to-end computer vision project for automated parking access control using license plate
    recognition. The system is motivated by the limitations of manual checkpoints, keypad-based entry,
    and card-based access methods, which add recurring operational overhead and can still fail in routine
    use because of process friction or human error.
  </p>

  <p>
    The implementation combines a lightweight plate detector, OCR with preprocessing, text normalization,
    and resident-database matching with both exact and fuzzy strategies. This integration focus is central to
    the project, since robust access-control behavior depends on pipeline quality across stages rather than
    any single model metric.
  </p>

  <p>
    The final output produces grant-or-deny decisions with confidence scores and supports reproducible
    evaluation against labeled ground truth. The project is packaged as a configurable CLI pipeline so it can
    be tested, tuned, and deployed with predictable behavior in real access-control scenarios.
  </p>
</section>
    `
  }
];
