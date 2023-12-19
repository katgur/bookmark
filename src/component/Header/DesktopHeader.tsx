import logo from '../../img/logo-bookmark.svg'
import { HeaderProps } from '../../util/types'

function DesktopHeader({ options }: HeaderProps) {
    return (
        <header>
            <img src={logo} alt='Bookmark Logo' />
            <nav>
                <ul>
                    {
                        options.map(option => (
                            <li key={option as React.Key}>
                                <a href="#">{option}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button>
                Login
            </button>
        </header>
    )
}

export default DesktopHeader