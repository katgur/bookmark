import useWidth from '../../hook/useWidth'
import img1 from '../../img/illustration-features-tab-1.svg'
import img2 from '../../img/illustration-features-tab-2.svg'
import img3 from '../../img/illustration-features-tab-3.svg'
import TabLayout from './TabLayout'

const options = ['  Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
const content = [
    {
        title: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: img1,
    },
    {
        title: 'Intelligent search',
        text: '  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: img2,
    },
    {
        title: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: img3,
    }
]

function Features() {
    const width = useWidth()

    return (
        <section className='text-center px-6 mt-24'>
            <h2 className='text-2xl font-bold'>
                Features
            </h2>
            <p className='text-base text-grayishBlue mt-4'>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <TabLayout menu={options} content={content} />
        </section>
    )
}

export default Features