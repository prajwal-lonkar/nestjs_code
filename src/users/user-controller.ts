import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user-service";
import { UsersInterceptor } from "./interceptors/user.inerceptor";


@Controller()
export class UserController{

    constructor (private readonly userService:UserService){}

    @Get("api/users")
    @UseInterceptors(UsersInterceptor)
    getUsers(){
        console.log("Inside get Users Handler");
        
        return this.userService.getUsers();
    }
}   