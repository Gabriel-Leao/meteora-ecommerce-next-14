import Product from '@/components/Product'
import { getProductBySlug } from '../../../lib/api'

export default async function ProdutoPage({ params }) {
  const product = getProductBySlug(params.slug)

  return (
    <main>
      <Product product={product} />
    </main>
  )
}
