export interface IModal {
    show: boolean,
    type: string,
    image: string,

    name?: String,
    gender?: String,
    created?: String,
    films?: Number,
    starships?: Number
    characters?: Object,
    director?: String,
    edited?: String,
    episode_id?: Number,
    opening_crawl?: string,
    planets?: Object,
    producer?: String,
    release_date?: String
    species?: Object,
    title?: String,
    url?: string,
    vehicles?: Object,
}

export interface IModalStyled {
    image?: string
}