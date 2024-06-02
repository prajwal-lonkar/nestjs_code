import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class Paginable{

    @Type(()=> Number)          // Converting into datatype number , by default it is in string format
    @IsNumber()           
    @IsNotEmpty()
    page:number;

    @Type(()=> Number)
    @IsNumber()
    @IsNotEmpty()
    limit:number;
}

/**
 *  This is how the vaidation will work 
 *  1. Check if its empty or not .
 *  2. With the help of Type we convert it into Number, by default it is string type.
 *  3. Then its checked if its really a valid number or not.
 *  
 */

// Check video 25 at timestamp 16:00 onwards for custom messages . 