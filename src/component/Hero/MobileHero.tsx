import hero from '../../img/illustration-hero.svg'

function MobileHero() {
    return (
        <article className='px-6 text-center'>
            <img src={hero} alt='Mockup' />
            <h1 className='text-3xl font-bold mt-4'>
                A Simple Bookmark Manager
            </h1>
            <p className='mt-4 px-2 text-base text-grayishBlue leading-6'>
                A clean and simple interface to organize your favourite websites. Open a new
                browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className='flex justify-around items-center mt-6 font-semibold'>
                <button type='button' className='bg-softBlue px-3 py-2 rounded text-white shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>
                    Get it on Chrome
                </button>
                <button type='button' className='bg-stone-100 px-3 py-2 rounded text-grayishBlue shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>
                    Get it on Firefox
                </button>
            </div>
        </article>
    )
}

export default MobileHero