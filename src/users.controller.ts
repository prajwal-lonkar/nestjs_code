import { Controller, Get, Req, Res, Header } from "@nestjs/common";
import {Request, Response} from "express";

@Controller("/users")
export class UsersController{

    @Get("/profile")
    @Header('header1','sample1')
    @Header('header2','sample2')
    getUsers(@Req() req:Request , @Res() res:Response){
        console.log(req);
        res.status(200);
        res.json({
            "result":"Success"
        })
    }

}