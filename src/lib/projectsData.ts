interface Project {
  slug: string;
  title: string;
  description: string;
  links: string[];
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
