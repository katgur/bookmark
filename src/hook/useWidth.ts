import { useState, useEffect } from 'react'
import { Width } from '../util/types'

function reducer(width: number): Width {
    if (width < 768) {
        return Width.Mobile
    } else if (width < 1024) {
        return Width.Tablet
    } else {
        return Width.Deskop
    }
}

function useWidth() {
    const [width, setWidth] = useState<Width>(reducer(window.innerWidth))

    useEffect(() => {
        const onResize = () => {
            const newWidth = reducer(window.innerWidth)
            if (width !== newWidth) {
                setWidth(newWidth)
            }
        }
        window.addEventListener('resize', onResize)
    }, [width, setWidth])

    return width
}

export default useWidth