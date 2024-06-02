import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

/**
 *  Here this interceptor we have created we want to apply to all the routes globally , for logging.
 */
@Injectable()
export class LoggerInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        const response=ctx.getResponse();

        const startTime  = Date.now();

        return next.handle().pipe(
            tap(()=>
        {
            const endTime = Date.now();
            const responseTime = endTime - startTime ;

            console.log(`${request.method} ${request.path} ${response.statusCode} ${responseTime}ms`);
        }) 
        );
    }
}