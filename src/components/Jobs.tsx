import { useEffect, useMemo, useState } from 'react'
import * as prismic from '@prismicio/client'
import { useTranslation } from 'react-i18next'
import JobCard from '@/components/JobCard'
import { jobInterface } from '@/types/job.interface'

const Jobs = () => {
    const [jobsList, setjobsList] = useState<any[]>()

    const { t, i18n } = useTranslation()

    const client: prismic.Client = useMemo(
        () => prismic.createClient(import.meta.env.VITE_PRISMIC_REPOSITORY),
        []
    )

    useEffect(() => {
        ;(async () => {
            const data = await client.getAllByType('jobs', {
                lang: i18n.language === 'fr' ? 'fr-fr' : 'en-gb',
                orderings: [{ field: 'my.jobs.end-date', direction: 'desc' }],
            })
            setjobsList(data)
        })()
    }, [i18n.language])

    return (
        <section
            id="jobs"
            className="text-secondary-light dark:text-secondary-dark mt-10"
        >
            <h3 className="text-light dark:text-dark text-2xl font-semibold">
                {t('links.experiences')}
            </h3>
            {jobsList?.map((job, i) => (
                <JobCard key={i} job={job.data as jobInterface} />
            ))}
        </section>
    )
}

export default Jobs
