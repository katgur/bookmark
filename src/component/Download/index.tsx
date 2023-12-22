import chrome from '../../img/logo-chrome.svg'
import firefox from '../../img/logo-firefox.svg'
import opera from '../../img/logo-opera.svg'
import Card from './Card'

const content = [
    {
        browser: 'Chrome',
        version: '62',
        icon: chrome,
    },
    {
        browser: 'Firefox',
        version: '55',
        icon: firefox,
    },
    {
        browser: 'Opera',
        version: '46',
        icon: opera,
    }
]

const position = ['mb-auto', 'my-auto', 'mt-auto']

function Download() {
    return (
        <section className='text-center px-6 mt-20 lg:px-[165px]'>
            <article className='px-[20%]'>
                <h2 className='text-3xl font-bold'>
                    Download the extenion
                </h2>
                <p className='text-base text-grayishBlue mt-4'>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.
                </p>
            </article>
            <ul className='mt-10 flex flex-col lg:flex-row lg:h-[500px] gap-8 lg:justify-center'>
                {
                    content.map((option, index) => (
                        <li key={option.browser as React.Key} className={'h-fit ' + position[index]}>
                            <Card {...option} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Download