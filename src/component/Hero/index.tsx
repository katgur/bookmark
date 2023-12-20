import useWidth from '../../hook/useWidth'
import { Width } from '../../util/types'
import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'

function Hero() {
    const width = useWidth()

    if (width === Width.Deskop) {
        return <DesktopHero />
    }

    return <MobileHero />
}

export default Hero