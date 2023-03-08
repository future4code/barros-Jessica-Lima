export class User {
   constructor(
      private email: string,
      private password: string,
   ) { }

   public getEmail(): string {
      return this.email;
   }

   public getPassword(): string {
      return this.password;
   }

}


export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN",
}
