import { products } from '../mocks/products'
import { categories } from '../mocks/categories'

export function getAllProducts() {
  return products
}

export function getProductBySlug(slug) {
  // Encontra o produto pelo slug (neste caso, o ID).
  const product = products.find((p) => p.id.toString() === slug)
  return product
}

export function getCategories() {
  return categories
}
