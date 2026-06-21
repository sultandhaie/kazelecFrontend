import products from "@/data/products.json";
import categories from "@/data/categories.json";
import type { Product, Category } from "@/types/product";

const allProducts = products as Product[];
const allCategories = categories as Category[];

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.isFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter((p) => p.categoryId === categoryId);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const category = allCategories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return allProducts.filter((p) => p.categoryId === category.id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return allCategories.find((c) => c.id === id);
}

export function getAllCategories(): Category[] {
  return allCategories;
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return allProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
