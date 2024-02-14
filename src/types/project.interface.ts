import { linkInterface, titlePrismicInterface } from "./job.interface"

export interface projectInterface {
    link: linkInterface
    thumbnail: linkInterface
    name: titlePrismicInterface[]
    description: titlePrismicInterface[]
    tags: tagInterface[]
}

export interface tagInterface {
    tag: string
}
