export interface Skill {
    id: number;
    name: string;
    level: number; // 1-100
    category: 'primary' | 'languages' | 'web' | 'database' | 'frontend' | 'tools' | 'methodologies';
    icon?: string;
}
