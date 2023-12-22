import Contact from './component/Contact'
import Download from './component/Download'
import Features from './component/Features'
import Header from './component/Header'
import Hero from './component/Hero'
import Questions from './component/Questions'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Download />
                <Questions />
                <Contact />
            </main>
        </>
    )
}

export default App
