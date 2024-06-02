import { Exclude } from "class-transformer";

export class Users {
    id:number;
    username:string;

    @Exclude()
    password:string;
    displayName:string
}

export const mockUsers: Users[]  = [
    {
        id:1,
        username:"abc",
        password:"abc123",
        displayName:"abc"
    },
    {
        id:2,
        username:"xyz",
        password:"xyz123",
        displayName:"xyz"
    },
    {
        id:3,
        username:"stu",
        password:"stu123",
        displayName:"stu"
    }
]