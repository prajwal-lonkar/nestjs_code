import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JobController } from './controllers/jobs.controller';
import { InterviewController } from './controllers/interview.controller';
import { UserAgentMiddleware, userAgent } from './middlewares/user-agent.middleware';
import { AuthMiddleware } from './middlewares/auth-middleware';

@Module({
  imports: [],
  controllers: [InterviewController,JobController],
  providers: [],
})

// Implementation of Functional middlewares
// export class JobsModule implements NestModule{        // Implements NestModule class which contains 
//   configure(consumer: MiddlewareConsumer) {         //  configure method which we have to implement
//     consumer.apply(userAgent).forRoutes("jobs");     // here we specify which middleware we want to apply and to which routes
//   }
// }

// Code related to video after timestamp 9:00
// Class based Middlewares implementation
// export class JobsModule implements NestModule{        // Implements NestModule class which contains 
//   configure(consumer: MiddlewareConsumer) {         //  configure method which we have to implement
//     consumer.apply(UserAgentMiddleware).forRoutes("jobs");     // here we specify the class name we want to apply and to which routes
//   }

  // Scenario when we want to apply middleware to a particular route 
  // Here we want middleware to work only the POST route with endpoint "jobs/refs" 
// export class JobsModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(UserAgentMiddleware).forRoutes({path:"jobs/refs", method:RequestMethod.POST });
//   }
// }


//In this scenario for all the routes in the JobController the middleware will work ,
// except for the route with endpoint "job/refs" whose type is POST. 
// export class JobsModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(UserAgentMiddleware).
//     exclude({path:"jobs/refs", method:RequestMethod.POST}).
//     forRoutes(JobController);
//   }

// Here we are chaining multiple middlewares . Refer video 33
// Here 2 middlewares are chained AuthMiddleware and UserAgentMiddleware for JobController route.
  export class JobsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware,UserAgentMiddleware).
      forRoutes(JobController);
    }
}

 