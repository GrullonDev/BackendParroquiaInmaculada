export declare enum UserRole {
    PARROCO = "PARROCO",
    VICARIO = "VICARIO",
    NOTARIO = "NOTARIO",
    VICE_CANCILLER = "VICE_CANCILLER"
}
export declare class User {
    id: string;
    nombre: string;
    correo: string;
    rol: UserRole;
    password: string;
}
