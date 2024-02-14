import { DateUtils } from '@/utils/DateUtils'
import '@/components/JobCard/JobCard.scss'
import { jobInterface } from '@/types/job.interface'

const JobCard = ({ job }: { job: jobInterface }) => {
    return (
        <a
            className="flex flex-col md:flex-row job-card mt-4 cursor-pointer rounded px-0 md:px-5 py-3"
            href={job.link.url}
            target="_blank"
            rel="noreferrer"
        >
            <div className="w-full md:w-1/4 text-sm mb-3">
                {DateUtils.formatDateToStringInterval(
                    new Date(job['start-date']),
                    new Date(job['end-date'])
                )}
            </div>
            <div className="w-full md:w-3/4 flex flex-col">
                <span className="text-lg text-light dark:text-dark font-semibold title-job">
                    {job.title[0].text}
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
                </span>
                <span className="opacity-70">{job.position[0].text}</span>
                <span className="text-sm text-justify">
                    {job.description[0].text}
                </span>
            </div>
        </a>
    )
}

export default JobCard
