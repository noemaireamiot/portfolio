import { projectInterface } from "./project.interface"

export interface jobInterface {
    link: linkInterface
    title: titlePrismicInterface[]
    position: titlePrismicInterface[]
    description: titlePrismicInterface[]
    "start-date": string
    "end-date": string
}

export interface linkInterface {
    url: string
}

export interface titlePrismicInterface {
    text: string
}

export interface prismicContentInterface {
    data: jobInterface | projectInterface
}