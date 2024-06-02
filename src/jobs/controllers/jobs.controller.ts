import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";

@Controller("jobs")
export class JobController{

    @Get("refs")
    findJobRefs(@Req() req:Request){
        console.log(req["ua"]);
        return {success:true , message:"Jobs Ref List"}
        
    }

    @Post("refs")
    createJobRef(@Body() body:any){
        return {success:true , message:"Create Job Ref Successfull"}
    }

    @Put(":jobId")
    updateJobId9(@Param("jobId", ParseIntPipe) jobId:number){
        return {success:true , message: "Update Successfull"}
    }
}
