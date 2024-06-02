import { Injectable } from "@nestjs/common";
import { mockUsers } from "./user";


@Injectable()
export class UserService{

    getUsers(){
        return mockUsers;
    }
}