import { useEffect, useMemo, useState } from 'react'
import * as prismic from '@prismicio/client'
import { useTranslation } from 'react-i18next'
import ProjectCard from '@/components/ProjectCard'
import { projectInterface } from '@/types/project.interface'

const Projects = () => {
    const [projectsList, setProjectsList] = useState<any[]>()

    const { t, i18n } = useTranslation()

    const client: prismic.Client = useMemo(
        () => prismic.createClient(import.meta.env.VITE_PRISMIC_REPOSITORY),
        []
    )

    useEffect(() => {
        ;(async () => {
            const data = await client.getAllByType('projects', {
                lang: i18n.language === 'fr' ? 'fr-fr' : 'en-gb',
                orderings: [{ field: 'my.projects.order', direction: 'desc' }],
            })
            setProjectsList(data)
        })()
    }, [i18n.language])

    return (
        <section
            id="projects"
            className="text-secondary-light dark:text-secondary-dark mt-10"
        >
            <h3 className="text-light dark:text-dark text-2xl font-semibold">
                {t('links.projects')}
            </h3>
            {projectsList?.map((project, i) => (
                <ProjectCard
                    key={i}
                    project={project.data as projectInterface}
                />
            ))}
        </section>
    )
}

export default Projects
