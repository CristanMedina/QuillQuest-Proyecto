'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NuevaEscritura()
{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/addPost", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title, content, description })
      })
      router.refresh()
      ;
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      console.log('Success:', await response.json());
  
      setTitle('');
      setDescription('');
      setContent('');
    } catch (error) {
      console.error('Fetch error:', error.message);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto my-10">
      <div className="mb-5">
        <input type="text" id="title" value={title} onChange={handleTitleChange} 
          className="mt-1 block w-full px-3 shadow-inner shadow-[#6d809aff] py-2 bg-[#d7e2e9ff] border border-[#96a8c5ff] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder='Titulo' />
      </div>
      <div className="mb-5">
        <textarea id="content" value={description} onChange={handleDescriptionChange} rows="4"
          className="mt-1 block w-full px-3 py-2 bg-[#d7e2e9ff] border border-[#96a8c5ff] rounded-md shadow-inner shadow-[#6d809aff] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" resize='none' placeholder='Sinopsis'></textarea>
      </div>
      <div className="mb-5">
        <textarea id="content" value={content} onChange={handleContentChange} rows="20"
          className="mt-1 block w-full px-3 py-2 bg-[#d7e2e9ff] border border-[#96a8c5ff] rounded-md shadow-inner shadow-[#6d809aff] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder='Escribe tu historia...'></textarea>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
        Submit
      </button>
    </form>
  );
}

