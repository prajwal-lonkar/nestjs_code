import { JobsModule } from "../jobs.module";



export const jobsRoutes = [
    {
         path: "jobs", module:JobsModule
     }
]

/**
 *  Here we are specifying jobsRoutes array . 
 *  The array contains the path which basically defines with what the routes are to be prefixed.
 *  So in this case the JobsModule controller routes will be prefixed with /jobs first and then the endpoint names.
 *  In JobsRoutes there are multiple controllers , all the endpoints of those controllers will be prefixed with '/jobs'.
 *   
 */