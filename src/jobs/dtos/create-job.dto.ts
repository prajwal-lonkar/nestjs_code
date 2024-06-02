import { Type } from "class-transformer";
import { JobType } from "../constants/job.constants";
import {IsString, IsNotEmpty, IsEmail, IsIn, IsOptional, IsInt, IsNumber, ArrayMinSize, IsBoolean, ValidateNested, IsObject} from "class-validator";

export class LocationDTO {
    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    country:string
}

export class CreateJobDTO {
    @IsString()
    @IsNotEmpty()
    companyName:string;

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsEmail()
    email:string;

    @IsIn(Object.keys(JobType))
    @IsOptional()
    type?:JobType;

    @IsInt()
    @IsNotEmpty()
    experience:number;

    @IsNumber()
    @IsNotEmpty()
    salary:number;

    @IsString({each:true})              // Specifies that this will be an array and all the items in it will be of type string. 
    @ArrayMinSize(1)                // Minimum size should be one
    tags?:string[];

    @IsBoolean()
    @IsOptional()
    isActive?:boolean;

    @ValidateNested()               // Specifies that the nested properties should also be validated
    @IsObject()                     // Checks it should not be empty  , it should be an object
    @Type(() => LocationDTO)        // Will first convert into specific type and then validate it.
    location:LocationDTO    
}