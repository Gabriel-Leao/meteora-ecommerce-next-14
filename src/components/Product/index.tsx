'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const Product = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.cores[0]?.nome)
  const [selectedSize, setSelectedSize] = useState(product?.tamanho ?? '')

  return (
    <section>
      <h2 className="text-center pb-2">Detalhes de {product.nome}</h2>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            width={350}
            height={422}
            src={product.imageSrc}
            alt={product.nome}
            className={styles.productImage}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.nome}</h1>
          <p className={styles.description}>{product.descricao}</p>
          <hr className={styles.divider} />
          <p className={styles.price}>{product.preco}</p>
          <div className={styles.options}>
            <div className={styles.colors}>
              {product.cores.map((cor) => (
                <button
                  key={cor.nome}
                  style={{ backgroundColor: cor.hexa }}
                  onClick={() => setSelectedColor(cor.nome)}
                  aria-label={cor.nome}
                  className={`${styles.colorOption} ${
                    selectedColor === cor.nome && styles.selectedColor
                  }`}
                />
              ))}
            </div>
            {product?.tamanho?.length > 0 && (
              <div className={styles.sizes}>
                {product?.tamanho.map((tamanho) => (
                  <button
                    key={tamanho}
                    onClick={() => setSelectedSize(tamanho)}
                    className={`${styles.sizeOption} ${
                      selectedSize === tamanho && styles.selectedSize
                    }`}>
                    {tamanho}
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
