import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";

@Controller("interviews")
export class InterviewController{

    @Get("")
    findInterviews(){
        return {success:true , message:"Interview List"}
        }

    @Post("schedule")
    scheduleInterview(){
        return {success:true , message:"Interview Scheduled"}
    }
}
