export type NewsContentBlock = {
  type: "paragraph" | "heading" | "list" | "image";
  value: string;
};

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: NewsContentBlock[];
  coverImage: string;
  gallery: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};
