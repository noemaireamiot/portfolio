import '@/components/ProjectCard/ProjectCard.scss'
import { projectInterface } from '@/types/project.interface'

const ProjectCard = ({ project }: { project: projectInterface }) => {
    return (
        <a
            className="flex flex-col md:flex-row project-card mt-4 cursor-pointer rounded px-0 md:px-5 py-3"
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
        >
            <div className="w-full md:w-1/4 md:pr-4 flex flex-col justify-center mb-3">
                <img className="rounded" src={project.thumbnail.url} alt="" />
            </div>
            <div className="w-full md:w-3/4 flex flex-col">
                <span className="text-lg text-light dark:text-dark font-semibold title-project">
                    {project.name[0].text}
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
                <span className="text-sm text-justify">
                    {project.description[0].text}
                </span>
                <div className="project-tags flex flex-wrap mt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.tag}
                            className="project-tag items-center rounded-full px-3 py-1 m-1 text-xs font-medium whitespace-nowrap"
                        >
                            {tag.tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
