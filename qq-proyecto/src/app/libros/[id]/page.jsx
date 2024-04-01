import db from '@/libs/db';

export default async function BookDetailPage({params}) {

    const bookId = parseInt(params.id, 10);

    const books = await db.book.findFirst({
        where: {
            id: bookId,
        },
        include: {
            author: true,
        },
    });

  return (

    <>
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold">{books?.title}</h1>
            <p>Escrito por: {books?.authorName?.username} </p>
            <div className="mt-4"> {books?.content} </div>
        </div>
    </>

  )
}

