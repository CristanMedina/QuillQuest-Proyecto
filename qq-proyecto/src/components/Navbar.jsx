
import Link from 'next/link';
import Image from 'next/image';
import logoQQ from "../img/Logo_y_Letras.svg";
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session?.user ? (
        <>
          <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto shadow-xl  bg-[#1e5551]">
                    <ul class="space-y-2 font-medium">
                      <li>
                            <Link href="/biblioteca">
                              <Image src={logoQQ} height={125*1.3} width={93*1.3} alt="Quill Quest" className='cursor-pointer' priority/>
                            </Link>
                      </li>
                      <li>
                            <Link href="/biblioteca" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Biblioteca +
                            </Link>
                      </li>
                      <li>
                            <Link href="/auth/ingreso" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Ingresar + 
                            </Link>
                      </li>
                      <li>
                            <Link href="\auth\registro" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Registrarse +
                            </Link>
                      </li>
                      
                    </ul>
                </div>
              </aside>
        </>
        ) : (
          <>
              <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto shadow-xl  bg-[#1e5551]">
                    <ul class="space-y-6 font-medium">
                      <li>
                            <Link href="/biblioteca">
                              <Image src={logoQQ} height={125*1.3} width={93*1.3} alt="Quill Quest" className='cursor-pointer' priority/>
                            </Link>
                      </li>
                      <li>
                            <Link href="/biblioteca" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Biblioteca +
                            </Link>
                      </li>
                      <li>
                            <Link href="/nuevaEscritura" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Escribir historia... 
                            </Link>
                      </li>
                      
                      <li>
                            <hr class="h-px my-8 bg-lime-200 border-0"/>
                            <Link href="/api/auth/signout" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'>
                              + Signout +
                            </Link>
                      </li>
                    </ul>
                </div>
              </aside>
        </>
        )
      }
    </>
  );
};

export default Navbar;