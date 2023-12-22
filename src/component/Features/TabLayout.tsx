import { useState } from 'react'
import { Width } from '../../util/types'
import useWidth from '../../hook/useWidth'

interface Option {
    title: string,
    text: string,
    img: string,
}

interface TabLayoutProps {
    menu: string[],
    content: Option[],
}

function TabLayout({ menu, content }: TabLayoutProps) {
    const [index, setIndex] = useState<number>(0)
    const width = useWidth()

    return (
        <div className='mt-6'>
            <menu>
                <ul className='border-b-[1px] border-grayishBlueTransparent lg:flex lg:justify-center lg:border-0'>
                    {
                        menu.map((option, i) => (
                            <li key={option as React.Key} className='border-t-[1px] border-grayishBlueTransparent pt-4 font-semibold text-grayishBlue lg:border-0 lg:border-b-[1px]'>
                                <button onClick={() => setIndex(i)} className={index === i ? 'border-b-4 border-softRed pb-4 text-black px-10' : 'border-b-4 border-transparent pb-4 px-10'}>
                                    {option}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </menu>
            <article className='relative mt-10 lg:flex lg:items-center lg:gap-24 lg:text-left'>
                <div className='relative h-[50vw] px-6 pb-6 lg:h-[33vw]'>
                    <img className='m-[auto] z-10 relative h-full object-contain' src={content[index].img} alt={content[index].title} />
                    <div className='bg-softBlue rounded-full w-[200%] absolute z-0 h-[75%] right-[20%] bottom-0'></div>
                </div>
                <div className='mt-4 lg:w-1/2'>
                    <h3 className='text-3xl font-bold'>
                        {content[index].title}
                    </h3>
                    <p className='text-base text-grayishBlue mt-4'>
                        {content[index].text}
                    </p>
                    {
                        width === Width.Deskop && <button className='mt-6 bg-softBlue px-3 py-2 rounded text-white shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>More Info</button>
                    }
                </div>
            </article>
        </div>
    )
}

export default TabLayout