export type Product = {
  id: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string | undefined>;
  features: string[];
  advantages: string[];
  applications: string[];
  documents: {
    title: string;
    url: string;
  }[];
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};
