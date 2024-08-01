'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const Product = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name)
  const [selectedSize, setSelectedSize] = useState(product?.size ?? '')

  return (
    <section>
      <h2 className="text-center pb-2">Detalhes de {product.name}</h2>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            width={350}
            height={422}
            src={product.imageSrc}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.descricao}</p>
          <hr className={styles.divider} />
          <p className={styles.price}>{product.preco}</p>
          <div className={styles.options}>
            <div className={styles.colors}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  style={{ backgroundColor: color.hexa }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={color.name}
                  className={`${styles.colorOption} ${
                    selectedColor === color.name && styles.selectedColor
                  }`}
                />
              ))}
            </div>
            {product?.size?.length > 0 && (
              <div className={styles.sizes}>
                {product?.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${styles.sizeOption} ${
                      selectedSize === size && styles.selectedSize
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className={styles.addToCart}>Adicionar à sacola</button>
        </div>
      </div>
    </section>
  )
}

export default Product
