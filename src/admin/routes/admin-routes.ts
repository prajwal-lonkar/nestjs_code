import { AdminModule } from "../admin.module";
import { OfficeModule } from "../offices/office.module";


export const adminRoutes = [
    {
        path:"admin", module:AdminModule,
    children:[
        {
            path:"office",module:OfficeModule
        }
            ]
    }
]

/**
 *  Here we are specifying adminRoutes array . 
 *  The array contains the path which basically defines with what the routes are to be prefixed .
 *  So in this case the AdminModule controller routes will be prefixed with /admin first and then the endpoint names.
 *  In AdminRoutes there ia a controller named DashboardController which have the endpoint '/dashboard' .
 *  So now the complete route will be '/admin/dashboard'.
 * 
 * 
 *  For the children part,
 *  In AdminModule we have the import of OfficeModule  , so in this case that route will be also prefixed with '/admin'
 *  In OfficeModule we have the controller 'OfficeController' for which the endpoint is '/' . So the complete route will 
 *  be 'admin/office/'.
 */