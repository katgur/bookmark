import useWidth from '../../hook/useWidth'
import { Width } from '../../util/types'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

const options = ['Features', 'Pricing', 'Contact']

function Header() {
    const width = useWidth()

    if (width === Width.Deskop) {
        return <DesktopHeader options={options} />
    }

    return <MobileHeader options={options} />
}

export default Header