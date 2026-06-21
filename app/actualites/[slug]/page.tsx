import { notFound } from "next/navigation";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import ArticleDetailClient from "./ArticleDetailClient";

export async function generateStaticParams() {
  const articles = getAllNews();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: "Article non trouvé | KAZELEC" };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
  };
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllNews();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const popularArticles = allArticles.slice(0, 4).map((a) => ({
    slug: a.slug,
    title: a.title,
    date: a.publishedAt,
  }));

  return (
    <ArticleDetailClient
      article={article}
      prevArticle={prevArticle ? { slug: prevArticle.slug, title: prevArticle.title } : null}
      nextArticle={nextArticle ? { slug: nextArticle.slug, title: nextArticle.title } : null}
      popularArticles={popularArticles}
    />
  );
}
