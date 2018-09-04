export class User {
    constructor(public id: number,
                public name: string,
                public email: string,
                public password: string,status:number,
                is_email_verified:number,
                created:Date,
                updated:Date,
                data:any) {
    }
  }
  