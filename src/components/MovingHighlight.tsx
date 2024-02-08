import { MouseEvent, useRef, useState } from 'react'
import DarkMode from '@/components/DarkMode'
import LanguageSwitch from '@/components/LanguageSwitch'

interface MovingHighlightProps {
    children: string | JSX.Element | JSX.Element[]
}

const MovingHighlight = ({ children }: MovingHighlightProps) => {
    const [bgColor, setBgColor] = useState<string>('rgb(15, 23, 42)')
    const [left, setLeft] = useState<number>(0)
    const [top, setTop] = useState<number>(0)
    const [isDark, setIsDark] = useState<boolean>(true)

    const ref = useRef<HTMLInputElement>(null)

    const onMouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
        const originalColor = isDark ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)'
        const gradientColor = 'rgb(29, 78, 216, 0.15)'
        const gradientSize = 600

        setLeft(ref.current?.offsetLeft ?? 0)
        const x = e.pageX - left

        setTop(ref.current?.offsetTop ?? 0)
        const y = e.pageY - top

        const xy = x + ' ' + y

        setBgColor(
            '-webkit-gradient(radial, ' +
                xy +
                ', 0, ' +
                xy +
                ', ' +
                gradientSize +
                ', from(' +
                gradientColor +
                '), to(rgba(255,255,255,0.0))), ' +
                originalColor
        )
    }

    return (
        <div
            style={{ background: bgColor }}
            ref={ref}
            onMouseMove={(e: MouseEvent<HTMLDivElement>) =>
                onMouseMoveHandler(e)
            }
        >
            <div className="flex justify-end mx-6">
                <DarkMode
                    isDark={isDark}
                    setIsDark={setIsDark}
                    setBgColor={setBgColor}
                />
                <LanguageSwitch />
            </div>
            {children}
        </div>
    )
}

export default MovingHighlight
