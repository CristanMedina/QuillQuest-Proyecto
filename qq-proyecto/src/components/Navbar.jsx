
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                                Biblioteca
                            </Link>
                      </li>
                      <li>
                            <Link href="/auth/ingreso" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>

                              Ingresar
                            </Link>
                      </li>
                      <li>
                            <Link href="\auth\registro" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                              Registrarse
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
                            <Link href="/biblioteca" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            Biblioteca
                            </Link>
                      </li>
                      <li>
                            <Link href="/nuevaEscritura" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                              Escribir historia
                            </Link>
                      </li>
                      
                      <li>
                            <hr class="h-px my-8 bg-lime-200 border-0"/>
                            <Link href="/api/auth/signout" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                              </svg>

                              Signout
                            </Link>
                      </li>
                      <li>
                            <Link href="/client" className='group flex items-center uppercase text-xl rounded-xl p-4 text-lime-200 hover:bg-lime-200 hover:text-[#264946ff] transition duration-300'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                          </svg>

                              Mi Perfil 
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