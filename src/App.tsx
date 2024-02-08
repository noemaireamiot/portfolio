import '@/App.scss'
import Hero from '@/pages/hero'
import MovingHighlight from '@/components/MovingHighlight'
import Content from '@/pages/content'

const App = () => {
    return (
        <MovingHighlight>
            <div
                className={`container mx-auto px-4 flex justify-between text-light dark:text-dark`}
            >
                <Hero className="w-[48%]" />
                <Content className="w-[48%]" />
            </div>
        </MovingHighlight>
    )
}

export default App
