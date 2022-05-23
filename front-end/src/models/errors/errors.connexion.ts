import {User} from '../user/user.model';

export class ErrorsConnexion {

    public static readonly WRONG_PASSWORD = "Le mot de passe est incorrecte"

     public static getMessageUserUnknown(user: User): string {
        return "Le résident " + ErrorsConnexion.userToString(user) + " n'existe pas"
     }

    public static getMessageWrongRoleAdmin(user: User): string {
        return "Le résident " + ErrorsConnexion.userToString(user) + " n'est pas un administrateur"
     }

    public static getMessageWrongRoleUser(user: User): string {
         return "Le résident " + ErrorsConnexion.userToString(user) + " est un administrateur"
     }

     private static userToString(user: User): string {
        return user.firstName + " " + user.lastName;
     }
}
