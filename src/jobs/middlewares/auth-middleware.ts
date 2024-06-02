import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";

function verifyJwtToken(token){
    return true;
}


@Injectable()
export class AuthMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const token = req.headers.authorization?.split(" ");

        if(token && verifyJwtToken(token))
        {
            next();
            return;
        }

        throw new UnauthorizedException();
    }
}