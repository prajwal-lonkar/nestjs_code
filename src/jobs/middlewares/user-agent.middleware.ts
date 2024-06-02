import { BadRequestException, ForbiddenException, HttpStatus, Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";


// Functional based middleware
export function userAgent(req:Request , res:Response , next:NextFunction)
{
      // Read a header named user agent header which tells us from where the request is comming i.e postman/chrome/firefox
      
       const ua = req.headers["user-agent"]     // reading a property named user-agent form headers
       console.log(ua);

       req["ua"]=ua;            // manipulating request object
       throw new NotFoundException("Invalid ua")            // this here we are ending the request response cycle here itself in middleware
    //    next();
}


//Class based middleware
@Injectable()
export class UserAgentMiddleware implements NestMiddleware {

    use(req: any, res: any, next: (error?: any) => void) {
        const ua=req.headers["user-agent"];

         if(!this.isUserAgentAcceptable(ua)){
            // res.status(HttpStatus.FORBIDDEN).json({message:"Not Allowed"})
            throw new ForbiddenException("Not Allowed")
         }
         req["ua"]=ua;
         next();
    }

    private isUserAgentAcceptable(userAgent:string){
        const acceptedUserAgents = ["chrome","firefox","postman"];
        return acceptedUserAgents.some((agent)=>
        userAgent.toLowerCase().includes(agent.toLowerCase()));
    }
}

