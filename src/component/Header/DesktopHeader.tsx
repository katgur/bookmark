import logo from '../../img/logo-bookmark.svg'
import { HeaderProps } from '../../util/types'

function DesktopHeader({ options }: HeaderProps) {
    return (
        <header className='px-[165px] py-10 flex items-center'>
            <img src={logo} alt='Bookmark Logo' />
            <nav className='ml-[auto]'>
                <ul className='flex gap-8'>
                    {
                        options.map(option => (
                            <li key={option as React.Key}>
                                <a className='uppercase tracking-widest font-semibold hover:text-softRed' href="#">{option}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button className='bg-softRed ml-9 px-8 py-2 rounded text-white uppercase tracking-widest shadow-lg font-semibold hover:bg-white hover:text-softRed border-2 border-transparent hover:border-softRed'>
                Login
            </button>
        </header>
    )
}

export default DesktopHeader