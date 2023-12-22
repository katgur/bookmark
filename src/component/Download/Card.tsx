interface CardProps {
    browser: string,
    version: string,
    icon: string,
}

function Card({ browser, version, icon }: CardProps) {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 lg:px-12 bg-dots bg-repeat-x bg-3/4'>
            <img className='m-auto' src={icon} alt={browser} />
            <h3 className='text-2xl font-bold mt-6'>
                Add to {browser}
            </h3>
            <p className='text-base text-grayishBlue mt-4'>
                Minimum version {version}
            </p>
            <button className='w-full mt-20 bg-softBlue px-3 py-2 rounded text-white shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>Add & Install Extension</button>
        </div>
    )
}

export default Card