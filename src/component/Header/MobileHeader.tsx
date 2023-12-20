import hamburger, { size as hamburgerSize } from '../../img/icon-hamburger.svg'
import close, { size as closeSize } from '../../img/icon-close.svg'
import facebook, { size as facebookSize } from '../../img/icon-facebook.svg'
import twitter, { size as twitterSize } from '../../img/icon-twitter.svg'
import logo from '../../img/logo-bookmark.svg'
import whiteLogo from '../../img/logo-bookmark-white.svg'
import React, { useState } from 'react'
import { HeaderProps } from '../../util/types'

function MobileHeader({ options }: HeaderProps) {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <header className='px-6'>
            <div className='flex justify-between py-10'>
                <img src={logo} alt='Bookmark Logo' />
                {
                    !expanded &&
                    <svg onClick={() => setExpanded(true)} {...hamburgerSize}>
                        <use xlinkHref={`#${hamburger}`} />
                    </svg>
                }
            </div>
            {
                expanded &&
                <div className='flex flex-col pb-10 fixed z-10 bg-darkBlueTransparent w-screen h-screen inset-0 px-6'>
                    <div className='flex justify-between py-10'>
                        <img src={whiteLogo} alt='Bookmark Logo' />
                        {
                            expanded &&
                            <svg onClick={() => setExpanded(false)} {...closeSize}>
                                <use xlinkHref={`#${close}`} />
                            </svg>
                        }
                    </div>
                    <nav>
                        <ul className='border-b-[1px] border-grayishBlueTransparent'>
                            {
                                options.map(option => (
                                    <li key={option as React.Key} className='border-t-[1px] border-grayishBlueTransparent p-5 text-center'>
                                        <a className='text-lg text-white uppercase tracking-widest' href="#">{option}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button className='mt-5 border-2 border-white rounded w-full p-2 text-white uppercase font-bold tracking-widest text-lg'>
                        Login
                    </button>
                    <ul className='flex justify-center items-center gap-10 mt-[auto]'>
                        <li>
                            <svg {...facebookSize}>
                                <use xlinkHref={`#${facebook}`} />
                            </svg>
                        </li>
                        <li>
                            <svg {...twitterSize}>
                                <use xlinkHref={`#${twitter}`} />
                            </svg>
                        </li>
                    </ul>
                </div>
            }
        </header>
    )
}

export default MobileHeader