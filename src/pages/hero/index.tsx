import { useTranslation } from 'react-i18next'
import Links from '@/components/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = ({ className }: { className: string }) => {
    const { t } = useTranslation()

    return (
        <div className={`${className}`}>
            <div className="md:fixed">
                <h1 className="text-5xl font-bold mb-4">Noé Maire-Amiot</h1>
                <h2 className="text-2xl font-semibold mb-4">{t('hero.job')}</h2>
                <p className="text-secondary-light dark:text-secondary-dark mb-6 md:mb-28">
                    {t('hero.description')}
                </p>
                <Links />
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
