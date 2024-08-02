import SVGIcon from '../SVGIcons'

const FooterItem = ({ iconName, title, description }) => (
  <div className="flex gap-6 w-[304px]">
    <div className="w-[72px] h-[72px]">
      <SVGIcon
        iconName={iconName}
        fill="#000"
        width="72"
        height="72"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#daff01] text-[16px] leading-[23px] font-bold">
        {title}
      </h3>
      <p className="text-[13px] leading-5">{description}</p>
    </div>
  </div>
)

export const Footer = () => {
  return (
    <section className="text-white bg-black p-10 text-center mt-[30px]">
      <h3 className="text-[32px] font-medium">
        Conheça todas as nossas facilidades
      </h3>
      <div className="max-w-[800px] m-auto flex justify-around gap-8 items-center">
        <FooterItem
          iconName="diamond"
          title="PAGUE PELO PIX"
          description="Ganhe 5% OFF em pagamentos via PIX"
        />
        <FooterItem
          iconName="repeat"
          title="TROCA GRÁTIS"
          description="Fique livre para trocar em até 30 dias."
        />
        <FooterItem
          iconName="flower"
          title="SUSTENTABILIDADE"
          description="Moda responsável, que respeita o meio ambiente."
        />
      </div>
    </section>
  )
}
