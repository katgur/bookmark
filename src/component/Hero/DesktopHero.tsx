import hero from '../../img/illustration-hero.svg'

function DesktopHero() {
    return (
        <article className='px-[165px] py-20 flex gap-24 items-center relative'>
            <div className='w-1/2 shrink-0'>
                <h1 className='text-4xl font-bold'>
                    A Simple Bookmark Manager
                </h1>
                <p className='mt-6 px-2 text-base text-grayishBlue leading-6'>
                    A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className='flex gap-6 items-center mt-6 font-semibold'>
                    <button type='button' className='bg-softBlue px-3 py-2 rounded text-white shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>
                        Get it on Chrome
                    </button>
                    <button type='button' className='bg-stone-100 px-3 py-2 rounded text-grayishBlue shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>
                        Get it on Firefox
                    </button>
                </div>
            </div>
            <img className='w-1/2 z-10' src={hero} alt='Mockup' />
            <div className='bg-softBlue rounded-full w-1/2 absolute z-0 h-[50%] right-[-20%] bottom-[10%]'></div>
        </article>
    )
}

export default DesktopHero