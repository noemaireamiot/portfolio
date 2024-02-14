import About from '@/components/About'
import Jobs from '@/components/Jobs'
import Projects from '@/components/Projects'
import { Trans, useTranslation } from 'react-i18next'

const Content = ({ className }: { className: string }) => {
    const { t } = useTranslation()
    return (
        <div className={`${className} pb-24`}>
            <About />
            <Jobs />
            <Projects />
            <p className="text-secondary-light dark:text-secondary-dark mt-12">
                <Trans
                    t={t}
                    i18nKey="content.ressources"
                    components={{
                        1: (
                            <a
                                href="https://code.visualstudio.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                Visual Studio Code
                            </a>
                        ),
                        2: (
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                React
                            </a>
                        ),
                        3: (
                            <a
                                href="https://vitejs.dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                Vite
                            </a>
                        ),
                        4: (
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                Tailwind CSS
                            </a>
                        ),
                        5: (
                            <a
                                href="https://www.netlify.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                Netlify
                            </a>
                        ),
                        6: (
                            <a
                                href="https://prismic.io/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold"
                            >
                                Prismic
                            </a>
                        ),
                    }}
                />
            </p>
        </div>
    )
}

export default Content
