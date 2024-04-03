import db from '@/libs/db';
import Books from '@/components/Books';
import Link from 'next/link';
import { Fugaz_One } from "next/font/google";


const fugaz = Fugaz_One ({
  weight: '400',
  subsets: ['latin'],
})

async function getBooks(){
  const books = await db.book.findMany({
    where: {published: true},
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      author: { select: {username: true} }
    }
  })
  return books;
}

export default async function bibliotecaPage() {
  const books = await getBooks();

  return (
    <div className='container max-w-4xl mx-auto py-8 text-black'>
        <div className='text-4xl'>
          <h1 className={fugaz.className}>Biblioteca</h1>
        </div>

    <div className='grid grid-cols-3 gap-4 mt-10'>
    {
      books.map((book) => {
        const dateString = new Date(book.createdAt).toDateString();

        return (
          
            <Link key={book.id} href={`/libros/${book.id}`}>
            <Books
            key={book.id}
            id={book.id}
            title={book.title}
            description={book.description}
            authorName={book.author.username}
            dateCreated={dateString}
            />
            </Link>
          
        )
      })
    }
    </div>

    </div>
  )
}