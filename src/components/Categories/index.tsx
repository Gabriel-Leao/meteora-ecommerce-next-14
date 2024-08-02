import Image from 'next/image'

export const Categories = ({ categories }) => {
  return (
    <section className="flex text-center flex-col">
      <h2>Busque por categoria:</h2>
      <div className="flex justify-center gap-[30px] flex-wrap p-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-[#daff01] text-center flex flex-col h-[192px] w-[160px]">
            <div className="p-[10px] pb-0 m-auto">
              <Image
                width={130}
                height={157}
                src={category.imageSrc}
                alt={category.name}
                className="object-contain"
                quality={100}
              />
            </div>
            <p className="text-white bg-black py-2 px-4 flex text-[16px] justify-center self-stretch">
              {category.nome}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
