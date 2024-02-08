import { Trans, useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()
    return (
        <section
            id="about"
            className="text-secondary-light dark:text-secondary-dark"
        >
            <Trans
                i18nKey="content.about"
                components={{
                    1: <br />,
                }}
            />
        </section>
    )
}

export default About
