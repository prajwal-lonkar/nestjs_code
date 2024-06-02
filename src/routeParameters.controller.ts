import { Controller, Get, Param, Req, Res } from "@nestjs/common";
import {Request, Response} from "express";

interface IparamData {
    id:number,
    name:string
}

@Controller("/album")
export class AlbumController {

    @Get("/fetch/:id")                 // here when we write 'id' we are directly accessing the value associated it
    getAlbum(@Req() req:Request, @Res() res:Response , @Param('id') param:number){
         console.log(param);               // here if we directly access the params then its type is object  
    }

    @Get("fetch/:id/:name")         // here we can also deal with multiple parameters
    getMultipleParams(@Param() param:IparamData){    // here we also specify the structure for the parameters
     console.log(param.id);
     console.log(param.name);     
    }
}

/**
 *  This is for the route parameters .
 *  http://localhost:3000/album/fetch/3/hero
 *  Here we are accessing the data from the routes.
 */