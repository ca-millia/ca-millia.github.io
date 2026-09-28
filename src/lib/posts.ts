import { getCollection, type CollectionEntry } from 'astro:content';
import organizationData from '../data/organization.json';
import collectionData from '../data/collections.json';

export type Post = CollectionEntry<'posts'>;
export type Organization = { category: string; tags: string[] };
export type EditorialCollection = { slug: string; title: string; description: string; posts: string[] };
const organization: Record<string, Organization> = organizationData;
export const editorialCollections = collectionData as EditorialCollection[];
export const categories = ['随笔', '笔记', '旅记', '项目记录'];
export async function allPosts() {
  const posts = await getCollection('posts');
  const ids = new Set(posts.map(post => post.id));
  const slugs = new Set<string>();
  for (const post of posts) {
    if (slugs.has(post.data.slug)) throw new Error(`Duplicate post slug: ${post.data.slug}`);
    slugs.add(post.data.slug);
  }
  for (const [id, value] of Object.entries(organization)) {
    if (!ids.has(id) || !categories.includes(value.category)) throw new Error(`Invalid organization: ${id}`);
  }
  const collectionSlugs = new Set<string>();
  for (const collection of editorialCollections) {
    if (collectionSlugs.has(collection.slug) || new Set(collection.posts).size !== collection.posts.length || !collection.posts.every(id => ids.has(id))) {
      throw new Error(`Invalid collection: ${collection.slug}`);
    }
    collectionSlugs.add(collection.slug);
  }
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}
export const postUrl = (post: Post) => `/posts/${encodeURIComponent(post.data.slug)}/`;
export const categoryOf = (post: Post) => organization[post.id]?.category;
export const tagsOf = (post: Post) => organization[post.id]?.tags ?? post.data.tags;
export const formatDate = (date: Date) => new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' }).format(date);
