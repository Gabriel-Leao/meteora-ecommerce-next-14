import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo.png'

export const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-[10px]">
      <nav className="flex items-center p-[10px]">
        <Link href="/">
          <Image
            src={logo}
            alt="Meteora logo"
            width={100}
            height={22}
            priority
          />
        </Link>
        <ul className="flex gap-10">
          <li className="cursor-pointer font-[16px] leading-[23px] text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer font-[16px] leading-[23px] text-white">
            Nossas Lojas
          </li>
          <li className="cursor-pointer font-[16px] leading-[23px] text-white">
            Novidades
          </li>
          <li className="cursor-pointer font-[16px] leading-[23px] text-white">
            Promoções
          </li>
        </ul>
      </nav>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Digite o produto"
            className="text-[6c757d] text-[15px] leading-6 w-[170px] h-[38px] shrink-0 p-[10px] pr-[16px] border-[1px] border-solid border-[#ced4da]"
          />
          <button className="inline-flex items-center gap-[6px] py-[10px] px-3 text-white cursor-pointer border-[1px] border-solid border-white bg-transparent justify-center">
            Buscar
          </button>
        </form>
      </div>
    </header>
  )
}
