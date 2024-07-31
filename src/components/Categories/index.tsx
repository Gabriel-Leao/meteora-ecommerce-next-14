import styles from './categorias.module.css'
import Image from 'next/image'

export const Categories = ({ categories }) => {
  return (
    <section className={styles.categorias}>
      <h2>Busque por categoria:</h2>
      <div className={styles.container}>
        {categories.map((category) => (
          <div
            key={category.name}
            className={styles.card}>
            <div className={styles.imagemContainer}>
              <Image
                width={130}
                height={157}
                src={category.imageSrc}
                alt={category.name}
                style={{
                  objectFit: 'contain'
                }}
                quality={100}
              />
            </div>
            <p className={styles.title}>{category.nome}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
