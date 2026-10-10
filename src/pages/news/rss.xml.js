import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../data/site';

export async function GET(context) {
  const posts = (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${site.brand} · QA News`,
    description: 'Curated software testing news and releases.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/news/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
