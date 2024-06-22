enum UserType {
    Lector = 'LECTOR',
    Redactor = 'REDACTOR'
};

export interface User {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    image: string;
    type: UserType; 
    active: boolean;
}