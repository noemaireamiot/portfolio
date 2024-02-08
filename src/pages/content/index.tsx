import About from '@/components/About'
import Jobs from '@/components/Jobs'

const Content = ({ className }: { className: string }) => {
    return (
        <div className={`${className}`}>
            <About />
            <Jobs />
        </div>
    )
}

export default Content
