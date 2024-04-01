export default function Books({id, title, description, authorName, dateCreated})
    {
        return(
        <div>
                <div className='p-4 max-w-sm'>
                    <div className="container p-10 mx-auto bg-lime-200 rounded-2xl hover:scale-125 transition duration-300">
                        <div className="text-md mt-5">
                            <div className="text-center mb-12">
                                <p className="text-2xl font-semibold leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">{title}</p>
                                </div>
                                <p className="text-md text-gray-600">{authorName}</p>
                                <p className="text-sm text-indigo-600">{dateCreated}</p>
                            </div>
                        <p className="mt-2 text-md text-gray-900">{description}</p>
                    </div>
                </div>
        </div>
    )}