import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: {
    url: string;
    metadata: {
      lqip: string;
    };
  };
  url: string;
  content: PortableTextBlock[];
};
