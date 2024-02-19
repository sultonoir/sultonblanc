import { getXataClient } from "@/xata";

const xata = getXataClient();
export const getPosts = async (query: { id?: string; category?: string }) => {
  const posts = await xata.db.Posts.filter({
    category: query.category,
  }).getAll();
  return posts;
};

export const getPostsClient = async (query: { category?: string }) => {
  const posts = await xata.db.Posts.filter({
    category: query.category,
  }).getAll();

  const record = posts.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.imageUrl?.url,
    tag: item.tag,
    link: item.link,
    summary: item.summary,
  }));
  return record;
};

export const getPostById = async (id: string) => {
  const posts = await xata.db.Posts.filter({
    id,
  }).getFirst();
  return posts;
};
