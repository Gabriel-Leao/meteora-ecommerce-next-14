'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Products = ({ products }) => {
  const router = useRouter()

  if (!products) {
    return <div>Carregando produtos...</div>
  }

  return (
    <section className="flex flex-col">
      <h2 className="text-center">Produtos que estão bombando!</h2>
      <div className="flex justify-center gap-[30px] flex-wrap p-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-e-[4px] overflow-hidden w-[350px] shadow-card">
            <figure>
              <Image
                width={350}
                height={422}
                src={product.imageSrc}
                alt={product.name}
                className="shrink-0 object-cover"
              />
            </figure>
            <section className="p-4 text-[13px]">
              <p className="flex font-bold leading-[3px]">{product.name}</p>
              <div className="text-[#212529] text-[13px] leading-5 py-[13px] px-0">
                {product.description}
              </div>
              <div className="text-[16px] text-[#212529] font-bold leading-[23px]">
                {product.price}
              </div>
              <button
                className="flex py-[9px] px-4 gap-[10px] text-white text-center text-[16px] cursor-pointer bg-[#9353ff] w-[102px] mt-[10px] hover:bg-[#3700b3]"
                onClick={() => router.push(`/product/${product.id}`)}>
                Ver mais
              </button>
            </section>
          </div>
        ))}
      </div>
    </section>
  )
}
