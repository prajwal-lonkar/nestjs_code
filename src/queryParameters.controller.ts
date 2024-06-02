import { Controller, Get, Query } from "@nestjs/common";

interface IQueryParams {
    name:string,
    age:number
}

@Controller("/videos")
export class HeadersControllers{

    /**
     * 
     * @param query 
     * @description : Here we fetch the multiple values from headers  
     */
       @Get("/fetch")         
    getSingleHeader(@Query() query:IQueryParams){    
        console.log(query);         // here we get object of key value pairs
                                    // Output ---> {name:'prajwal' , age: '22'}
    }

    // Getting only the single query parameter 
    @Get("/fetch/multiple")
    getMultipleHeaders(@Query('name') query:string){
        console.log(query);         // here the value will get logged which is associated for the 'name'
    }

    /**
     * 
     * @param query 
     * @description This below function is the alternate way for accessing specific query parameter by its name
     */
    @Get("/fetch/multiplee")
    getMultipleHeaderss(@Query() query:IQueryParams){
        console.log(query.age);
        console.log(query.name);  
        
    }
}

/**
 *  Here the Query Parameters is the data which is appended after the '?' mark in the url
 *  For example
 *  http://localhost:3000/videos/fetch/multiple?name=prajwal&age=22
 */