export default function Books({id, title, description, authorName, dateCreated})
    {
        return(
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="text-md mt-5">
                    <p
                        className="text-2xl leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">{title}
                    </p>
                    <p className="text-md">{authorName}</p>
                    <p className="text-sm">{dateCreated}</p>
                </div>
                <p className="mt-2 text-md text-gray-900">{description}</p>
            </div>
        </>
    )}