import { useState } from 'react'
import arrow, { size as arrowSize } from '../../img/icon-arrow.svg'
import arrowActive from '../../img/icon-arrow-active.svg'

interface AccordionOption {
    title: string,
    text: string,
}

interface AccordionProps {
    content: AccordionOption[],
}

function Accordion({ content }: AccordionProps) {
    const [index, setIndex] = useState<number>(-1)

    const onSummaryClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, i: number) => {
        e.preventDefault()
        if (index === i) {
            setIndex(-1)
        } else {
            setIndex(i)
        }
    }

    return (
        <ul className='mt-10'>
            {
                content.map((question, i) => (
                    <li key={question.title as React.Key}>
                        <details>
                            <summary onClick={(e) => onSummaryClick(e, i)} className='flex justify-between items-center border-b-[1px] border-grayishBlueTransparent py-4 cursor-pointer hover:text-softRed'>
                                <h3 className='font-semibold'>
                                    {question.title}
                                </h3>
                                {
                                    index === i &&
                                    <svg {...arrowSize} className='rotate-180'>
                                        <use xlinkHref={`#${arrowActive}`} />
                                    </svg>
                                }
                                {
                                    index !== i &&
                                    <svg {...arrowSize}>
                                        <use xlinkHref={`#${arrow}`} />
                                    </svg>
                                }
                            </summary>
                        </details>
                        {
                            index === i &&
                            <p className='text-base text-grayishBlue my-4 text-left'>
                                {question.text}
                            </p>
                        }
                    </li>
                ))
            }
        </ul>)
}

export default Accordion