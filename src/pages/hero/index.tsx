import { useTranslation } from 'react-i18next'
import Links from '@/components/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@/pages/hero/Hero.scss'

const Hero = ({ className }: { className: string }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className={`${className}`}>
            <div className="md:fixed">
                <h1 className="text-5xl font-bold mb-4">Noé Maire-Amiot</h1>
                <h2 className="text-2xl font-semibold mb-4">{t('hero.job')}</h2>
                <p className="text-secondary-light dark:text-secondary-dark mb-6 md:mb-12">
                    {t('hero.description')}
                </p>
                <Links />
                <a
                    href={`/resume_${i18n.language === 'fr' ? 'fr' : 'en'}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light dark:text-dark dark:hover:text-tag hover:text-tag font-semibold text-lg mb-6 md:mb-12 block resume"
                >
                    {t('links.resume')}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 arrow-new-tab ml-1"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>

                <div className="mb-8">
                    <a
                        href="https://github.com/noemaireamiot"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-6"
                    >
                        <FontAwesomeIcon
                            className="opacity-50 hover:opacity-100"
                            icon={faGithub}
                            size="2xl"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/noe-maireamiot/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            className="opacity-50 hover:opacity-100"
                            icon={faLinkedin}
                            size="2xl"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
