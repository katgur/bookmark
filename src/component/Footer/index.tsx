import logo from '../../img/logo-bookmark-white.svg'
import facebook, { size as facebookSize } from '../../img/icon-facebook.svg'
import twitter, { size as twitterSize } from '../../img/icon-twitter.svg'

const options = ['Features', 'Pricing', 'Contact']

function Footer() {
    return (
        <footer className='bg-darkBlue flex flex-col justify-center items-center py-10 lg:flex-row lg:justify-start lg:px-[165px]'>
            <img src={logo} alt='Bookmark Logo' />
            <nav className='mt-6 lg:mt-0 lg:ml-10'>
                <ul className='flex flex-col gap-4 justify-center items-center text-white lg:flex-row'>
                    {
                        options.map(option => (
                            <li key={option as React.Key}>
                                <a className='uppercase tracking-widest hover:text-softRed' href="#">{option}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <ul className='mt-6 flex gap-8 lg:ml-auto lg:mt-0'>
                <li>
                    <a href='https://facebook.com/' target='_blank'>
                        <svg {...facebookSize}>
                            <use xlinkHref={`#${facebook}`} />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/' target='_blank'>
                        <svg {...twitterSize}>
                            <use xlinkHref={`#${twitter}`} />
                        </svg>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer