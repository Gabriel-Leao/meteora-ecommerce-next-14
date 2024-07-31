import { Categories } from '@/components/Categories'
import { getCategories, getAllProducts } from '../lib/api'
import { Products } from '@/components/Products'

const Home = async () => {
  const products = getAllProducts()
  const categories = getCategories()

  return (
    <main>
      <Categories categories={categories} />
      <Products products={products} />
    </main>
  )
}

export default Home
