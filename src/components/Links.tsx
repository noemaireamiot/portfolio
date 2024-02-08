import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Links = () => {
    const { t } = useTranslation()
    const links = [
        {
            name: t('links.about'),
            url: '#about',
        },
        {
            name: t('links.experiences'),
            url: '#jobs',
        },
        {
            name: t('links.projects'),
            url: '#projects',
        },
    ]

    const [currentHash, setCurrentHash] = useState(
        links.find((link) => link.url === window.location.hash)?.url ?? '#about'
    )

    return (
        <div className="flex flex-col text-light dark:text-dark links mb-12">
            {links.map((link) => {
                return (
                    <span
                        key={link.name}
                        className={`link-container flex mb-3 ${
                            link.url === currentHash ? 'active' : ''
                        }`}
                    >
                        <span className="link-line bg-light dark:bg-dark" />
                        <AnchorLink
                            offset={link.url === '#about' ? '100' : '0'}
                            href={link.url}
                            onClick={() => setCurrentHash(link.url)}
                        >
                            {link.name}
                        </AnchorLink>
                    </span>
                )
            })}
        </div>
    )
}

export default Links
