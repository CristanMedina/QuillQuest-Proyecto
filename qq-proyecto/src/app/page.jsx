import Image from 'next/image';
import Link from 'next/link';
import logoQQ from "../img/logoAmarillo.svg";

function HomePage() {
  return (
    <div>
      
        <section className="container mx-auto h-full relative">
          <div className="flex flex-col justify-center">
            <div className="w-full pt-36 pb-14 lg:w-auto flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-lime-100"> Quill Quest </h1>
              <Link href='/auth/registro' className="text-xl md:text-2xl font-semibold leading-tighter tracking-tighter mb-4 text-lime-50 hover:scale-110 duration-500"> Descubre tu próxima historia →</Link>
              <Image priority src={logoQQ} height={200} width={200} alt="logo"></Image>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default HomePage