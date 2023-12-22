import Accordion from './Accordion'

const content = [
    {
        title: 'What is Bookmark?',
        text: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
        title: 'How can I request a new browser?',
        text: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
        title: 'Is there a mobile app?',
        text: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentumurna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
        title: 'What about other Chromium browsers?',
        text: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
]

function Questions() {
    return (
        <section className='text-center px-6 mt-20 lg:w-1/3 lg:mx-auto'>
            <h2 className='text-3xl font-bold'>
                Frequently Asked Questions
            </h2>
            <p className='text-base text-grayishBlue mt-4'>
                Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us.
            </p>
            <Accordion content={content} />
            <button className='mt-10 bg-softBlue px-3 py-2 rounded text-white shadow-lg hover:bg-white hover:text-softBlue border-2 border-transparent hover:border-softBlue'>
                More Info
            </button>
        </section>
    )
}

export default Questions