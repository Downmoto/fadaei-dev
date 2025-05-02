import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '$lib/projectsData';

export const load: PageLoad = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (project) {
    return {
      title: project.title,
      content: project.content,
      links: project.links
    };
  }

  throw error(404, 'Not found bud');
};
