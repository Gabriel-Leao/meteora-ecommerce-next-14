import { getProductBySlug } from '@/lib/api'

export const ProductDetail = async ({ slug }) => {
  const product = getProductBySlug(slug)

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.descricao}</p>
      <p>{product.preco}</p>
    </section>
  )
}
