'use client'
import { useState } from 'react';

export default function FormNewBook()
{

    const { register, handleSubmit } = useForm();

    const submit = async (data) => {
        try {
            const res = await fetch('\api\addPost', {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                content: data.content
            }),
            headers: {
                'Content-Type':'application/json'
            }
            })
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-5">
                    <input type="text" {...register("title")}
                    className="mt-1 block w-full px-3 py-2 bg-[#62918d] text-gray-800 placeholder-[#264946ff]  rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500" placeholder="Titulo"/>
                </div>
                <div className="mb-5">
                    <textarea rows="15" {...register("content")}
                    className="mt-1 block w-full px-3 py-2 text-gray-800 bg-[#62918d] placeholder-[#264946ff]  rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500" placeholder="Comienza con tu historia..."></textarea>
                </div>
                <div>
                    <button type="submit" className="rounded-md bg-black">
                        <span className="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-lime-300 p-4 text-2xl  hover:-translate-y-3 
                        active:translate-x-0 active:translate-y-0
                        transition-all"> Submit </span>
                    </button>
                </div>
            </form>
        </>
    )
}