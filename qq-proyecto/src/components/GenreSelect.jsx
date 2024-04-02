import db from '@/libs/db';

async function getGenres(){
    const genres = await db.genres.findMany({
      orderBy: {
        id: asc,
      },
    })
    return genres;
  }

export default async function GenreSelect()
{
    const genre = await getGenres();
    return (
    <>
        <select  defaultValue={'Ficcion'}>
           <option disabled>--Selecciona un Genero--</option>
           {genre?.map((genres) => (
            <option key={genres.id} value={genres.name}> {genres.name} </option>
           ))
           }
        </select>
    </>
    )
}