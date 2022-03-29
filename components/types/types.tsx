export type AppState = {
    isLoaded: boolean,
    isAnimationRunning: boolean,
    currentPage: any,
    nextPage: any
}

export type Page = {
    name: string,
    url: string, 
    order: number, 
    cameraPositions: {
        desktop: CameraPosition,
        mobile: CameraPosition
    },
    displayContent: boolean,
    content: any, 
    displayProjects: boolean,
    projects: []
}

export type CameraPosition = {
    x: number,
    y: number,
    z: number
}

export type Project = {
    title: string,
    link: string,
    slug: string, 
    mainImage: any, 
    categories: [],
    publishedAt: any,
    shortDescription: string,
    description: any
}