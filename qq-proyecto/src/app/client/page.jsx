import Books from '@/components/Books';
import db from '@/libs/db';

export default async function ClientPage()
{  

    const myBooks = await db.book.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            author: true,
        },
    });
    console.log(myBooks)

   { 
        return(
            <>
                <div className='flex items-center flex-col justify-center min-h-screen'>
                    <h1>Mis Libros</h1>
                    <div>
                    {
                myBooks.map((myBooks) => {
                    const dateString = new Date(myBooks.createdAt).toDateString();
                        return (
                        <Books
                        key={myBooks.id}
                        id={myBooks.id}
                        title={myBooks.title}
                        description={myBooks.description}
                        authorName={myBooks.author?.username}
                        dateCreated={dateString}
                        />
                        )
                    })
                    }
                    </div>
                </div>
            </>
        )
    }
}