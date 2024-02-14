import '@/App.scss'
import Hero from '@/pages/hero'
import MovingHighlight from '@/components/MovingHighlight'
import Content from '@/pages/content'

const App = () => {
    return (
        <MovingHighlight>
            <div
                className={`max-w-[1200px] mx-auto px-4 md:flex justify-between text-light dark:text-dark`}
            >
                <Hero className="w-full md:w-[48%]" />
                <Content className="w-full md:w-[48%]" />
            </div>
        </MovingHighlight>
    )
}

export default App
