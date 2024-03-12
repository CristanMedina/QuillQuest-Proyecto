import Link from 'next/link';
import Image from 'next/image';
import logoQQ from "../img/logoAmarillo.svg";
import logoLetras from "../img/logoLetras.svg";
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      {!session?.user ? (
          <>
          <nav className="bg-[#264946ff] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
              <div className="items-center container flex gap-2 flex-shrink-0">
                  <Link href="/">
                    <Image src={logoQQ} height={48} width={48} alt="logo"/>
                  </Link>
                  <Link href="/">
                  <Image src={logoLetras} height={150} width={150} alt="logo"/>
                  </Link>
              </div>

              <div className="hidden md:block">
                <div className="mr-5 flex items-center space-x-4">
                      <ul className="flex divide-x divide-white">
                          <li>
                              <Link href="/auth/ingreso" className="p-2 mr-3 font-extrabold font-mono text-xl text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] rounded-xl transition duration-500"> Ingresar </Link>
                          </li>
                          <li>
                              <Link href="/auth/registro" className=" ml-3 p-2 font-extrabold font-mono text-xl text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] rounded-xl transition duration-500"> Registrarse </Link>
                          </li>
                      </ul>
                </div>
              </div>
          </div>
        </div>
      </nav>
      </>
        ) : (
          <>
          <nav className="bg-[#264946ff] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
              <div className="items-center container flex gap-2 flex-shrink-0">
                  <Link href="/">
                    <Image src={logoQQ} height={48} width={48} alt="logo"/>
                  </Link>
                  <Link href="/">
                  <Image src={logoLetras} height={150} width={150} alt="logo"/>
                  </Link>
              </div>

              <div className="hidden md:block">
                <div className="mr-5 flex items-center space-x-4">
                      <ul className="flex divide-x divide-white">
                          <li>
                              <Link href="/api/auth/signout" className="p-2 mr-3 font-extrabold font-mono text-xl text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] rounded-xl transition duration-500"> Logout </Link>
                          </li>
                          <li>
                              <Link href="/biblioteca" className=" ml-3 p-2 font-extrabold font-mono text-xl text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] rounded-xl transition duration-500"> Biblioteca </Link>
                          </li>
                      </ul>
                </div>
              </div>
          </div>
        </div>
      </nav>
      </>
        )
      }
    </>
  );
};

export default Navbar;