import news from "@/data/news.json";
import type { NewsArticle } from "@/types/news";

const allNews = news as NewsArticle[];

export function getAllNews(): NewsArticle[] {
  return allNews.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedNews(): NewsArticle[] {
  return allNews
    .filter((article) => article.featured)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return allNews.find((article) => article.slug === slug);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return allNews
    .filter((article) => article.category === category)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getLatestNews(limit: number = 6): NewsArticle[] {
  return getAllNews().slice(0, limit);
}

export function getRelatedNews(article: NewsArticle, limit: number = 3): NewsArticle[] {
  return allNews
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category ||
          a.tags.some((tag) => article.tags.includes(tag)))
    )
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const categories = new Set(allNews.map((article) => article.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const tags = new Set(allNews.flatMap((article) => article.tags));
  return Array.from(tags);
}
