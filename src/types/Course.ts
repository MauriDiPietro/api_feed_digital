export interface Course {
    name: string;
    description: string;
    code: string;
    startDate: string;
    endDate: string;
    image: string;
    daysOfClases: string[];
    hoursOfClases: string[];
    inscripts: any[];
    active: boolean;
}