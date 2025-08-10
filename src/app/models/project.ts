export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}
