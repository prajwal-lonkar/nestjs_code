import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { adminRoutes } from "./admin/routes/admin-routes";
import { jobsRoutes } from "./jobs/routes/jobs-routes";

const routes = [...adminRoutes,...jobsRoutes]

@Module({
    imports:[ RouterModule.register(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

/**
 *  Here we create a single array for both the routes.
 */