import db from '@/libs/db';
import Books from '@/components/Books';
import Link from 'next/link';


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
    <div className='max-w-4xl mx-auto py-8'>
    <div>biblioteca</div>

    <div className='flex flex-wrap justify-center mt-10'>
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