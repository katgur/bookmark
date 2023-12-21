import { useState } from "react"
import { Width } from "../../util/types"
import useWidth from "../../hook/useWidth"

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
                <ul className='border-b-[1px] border-grayishBlueTransparent'>
                    {
                        menu.map((option, i) => (
                            <li key={option as React.Key} className='border-t-[1px] border-grayishBlueTransparent pt-4 font-semibold text-grayishBlue'>
                                <button onClick={() => setIndex(i)} className={index === i ? 'border-b-4 border-softRed pb-4 text-black' : 'border-b-4 border-transparent pb-4'}>
                                    {option}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </menu>
            <article className='mt-10'>
                {/* <div className='relative h-[300px] px-6 pt-10'>
                    <div className='bg-softBlue rounded-full w-[200%] absolute z-0 h-[200px] right-[20%] bottom-0'></div>
                    <img src={content[index].img} alt={content[index].title} className='z-10 relative m-auto h-full object-contain' />
                </div> */}
                <div className='relative h-[50vw] px-6 pb-6'>
                    <img className='m-[auto] z-10 relative h-full object-contain' src={content[index].img} alt={content[index].title} />
                    <div className='bg-softBlue rounded-full w-[200%] absolute z-0 h-[75%] right-[20%] bottom-0'></div>
                </div>
                <h3 className='text-2xl font-bold mt-4'>
                    {content[index].title}
                </h3>
                <p className='text-base text-grayishBlue mt-4'>
                    {content[index].text}
                </p>
                {
                    width === Width.Deskop && <button>More Info</button>
                }

            </article>
        </div>
    )
}

export default TabLayout