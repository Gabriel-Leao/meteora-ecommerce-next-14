'use client'

import { useState } from 'react'
import Image from 'next/image'

const Product = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name)
  const [selectedSize, setSelectedSize] = useState(product?.size ?? '')

  return (
    <section>
      <h2 className="text-center pb-2">Detalhes de {product.name}</h2>
      <div className="border-none h-[1px] bg-[#e1e1e1] mb-4"></div>
      <div className="flex p-5 max-w-[1000px] m-auto">
        <div className="flex-1">
          <Image
            width={350}
            height={422}
            src={product.imageSrc}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>
        <div className="flex-1 pl-5">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
          <hr className="border-none h-[1px] bg-[#e1e1e1] mb-4" />
          <p className="text-xl font-bold mb-4">{product.preco}</p>
          <div className="mb-8">
            <div className="flex mb-4">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  style={{ backgroundColor: color.hexa }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={color.name}
                  className={`h-6 w-6 mr-[10px] cursor-pointer rounded-[50%] border-2 border-solid ${
                    selectedColor === color.name
                      ? 'border-[#27be56]'
                      : 'border-[#a2a2a2]'
                  }`}
                />
              ))}
            </div>
            {product?.size?.length > 0 && (
              <div className="flex mb-4">
                {product?.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-[1px] border-solid py-[5px] px-[10px] cursor-pointer ${
                      selectedSize === size
                        ? 'border-[#27be56]'
                        : 'border-[#ddd]'
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="hover:bg-[#333] text-white py-[10px] px-[15px] border-none cursor-pointer bg-black transition-colors duration-300">
            Adicionar à sacola
          </button>
        </div>
      </div>
    </section>
  )
}

export default Product
