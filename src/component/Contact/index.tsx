function Contact() {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='mt-20 bg-softBlue text-center py-12 px-6'>
            <div className='lg:w-1/3 lg:mx-auto'>
                <p className='text-white font-semibold tracking-widest'>
                    35,000+ already joined
                </p>
                <h2 className='text-white text-2xl font-semibold mt-2 lg:text-3xl lg:mt-4'>
                    Stay up-to-date with what we’re doing
                </h2>
                <form onSubmit={onSubmit} className='mt-10 flex flex-col gap-6 lg:flex-row'>
                    <input placeholder='Enter your email address' type='email' className='text-left bg-white px-4 py-3 rounded border-2 border-transparent focus:border-softRed lg:flex-1' />
                    <button type='submit' className='bg-softRed px-8 py-2 rounded text-white shadow-lg font-semibold hover:bg-white hover:text-softRed border-2 border-transparent hover:border-softRed'>Contact Us</button>
                </form>
            </div>
        </section>
    )
}

export default Contact