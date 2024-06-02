import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Users } from "../user";
import { plainToInstance } from "class-transformer";


/**
 *  Here we are creating an interceptor for our get users api route. 
 *  Every Interceptor must implement NestInterceptor class 
 */
@Injectable()
export class UsersInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<Users[]>): Observable<any> | Promise<Observable<any>> {
        console.log(context.getClass().name)
        return next.handle().pipe(map((data)=> data.map((user)=>plainToInstance(Users, user))))                                
    }
}


// Refer the nest js docs for Interceptors.