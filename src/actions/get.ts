import { XataClient } from "@/xata";
const xata = new XataClient();
export const getPosts = async (query: { id?: string; category?: string }) => {
  const posts = await xata.db.Posts.filter({
    category: query.category,
  }).getAll();
  return posts;
};

export const getPostById = async (id: string) => {
  const posts = await xata.db.Posts.filter({
    id,
  }).getFirst();
  return posts;
};
