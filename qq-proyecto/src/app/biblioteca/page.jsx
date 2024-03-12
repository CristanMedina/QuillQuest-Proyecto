"use client"
import { signOut } from 'next-auth/react';

export default function bibliotecaPage() {
  return (
    <div>
    <div>biblioteca</div>
        <button className="bg-white text-black px-4 py-2 rounded-xl mt-4" onClick={() => signOut()}> Salir </button>
    </div>
  )
}