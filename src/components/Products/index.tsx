'use client'

import styles from './produtos.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Products = ({ products }) => {
  const router = useRouter()

  if (!products) {
    return <div>Carregando produtos...</div>
  }

  return (
    <section className={styles.produtos}>
      <h2>Produtos que estão bombando!</h2>
      <div className={styles.container}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.card}>
            <figure>
              <Image
                width={350}
                height={422}
                src={product.imageSrc}
                alt={product.name}
                style={{
                  objectFit: 'cover'
                }}
                className={styles.imagem}
              />
            </figure>
            <section className={styles.info}>
              <p className={styles.titulo}>{product.name}</p>
              <div className={styles.descricao}>{product.descricao}</div>
              <div className={styles.preco}>{product.preco}</div>
              <button
                className={styles.botao}
                onClick={() => router.push(`/produto/${product.id}`)}>
                Ver mais
              </button>
            </section>
          </div>
        ))}
      </div>
    </section>
  )
}
