"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

function LoginPage() {

  const { register, handleSubmit ,formState: {errors} } = useForm();
  const router = useRouter();
  const [ error, setError ] = useState(null);

  const onSubmit = handleSubmit(async data => {
    console.log(data);

     const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if(res.error)
    {
      setError(res.error);
    } else {
      router.push('/biblioteca');
      router.refresh();
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="relative w-full sm:max-w-xl sm:mx-auto">
      <div
                class="absolute inset-0 bg-[#c5755380] blur-xl transform scale-75 translate-x-32 translate-y-12 sm:rounded-3xl">
            </div>
            <div
                class="absolute inset-0 bg-[#81ffaf82] blur-xl transform scale-75 -translate-x-32 -translate-y-12 sm:rounded-3xl">
            </div>
      <form onSubmit={onSubmit} className="relative px-4 py-10 rounded-3xl
            backdrop-filter backdrop-blur-lg
            transition ease-in-out delay-100 hover:scale-105 duration-500
            bg-[#404946d5]">

          {error && (<p className=" bg-red-400 text-white rounded-xl p-3 mb-4 text-center" > {error} </p>)}

          <h1 className="textoReg text-sky-50 text-center py-"> Ingresa con tu usuario </h1>

            
              <div className="relative mb-10 left-11">
                <input autocomplete="off" type="text"
                {...register("email",{required: { value: true, message: "E-Mail es requerido"}})}
                id="email" className="peer placeholder-transparent w-10/12 bg-transparent border-b py-2 border-sky-100
                focus: outline-none focus:border-violet-500 focus:border-b-2 transition-colors text-slate-100 font-bold" placeholder="Email:"
                />
                   { errors.email && ( <span className='absolute left-0 top-10 text-sm text-red-500'>{errors.email.message}</span> ) }
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-sky-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm duration-400"> E-Mail: </label>
              </div>
            
              <div className="relative left-11">
                <input type="password"
                {...register("password",{required: { value: true, message: "Contraseña es requerido"}})}
                id="password" className="peer placeholder-transparent w-10/12 bg-transparent border-b py-2 border-sky-100
                focus: outline-none focus:border-violet-500 focus:border-b-2 transition-colors text-slate-100 font-bold" placeholder="Contraseña:"
                />
                { errors.password && ( <span className='absolute left-0 top-10 text-sm text-red-500'>{errors.password.message}</span> ) }
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-sky-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm duration-400"> Contraseña: </label>
              </div>

              <div className="relative">
                    <button className="w-full p-3 rounded-lg
                    bg-gradient-to-tr from-lime-300 to-lime-500  text-sky-50 text-4xl font-extrabold  shadow-inner mt-11"> Entrar </button>
            </div>

      </form>
      </div>
    </div>
  )
}

export default LoginPage