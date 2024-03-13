export interface User {
    id: string;
    name: string;
    age: number;
    isLoggedIn: boolean;
}

export interface UserIdState {
    SSI: string;
    state: boolean;
}
