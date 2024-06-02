import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';

interface IpostData {
  id: number;
  name: string;
}
@Controller('/body')
export class BodyDataAccess {

  @Post('/data')
  postData(@Req() req: IpostData, @Res() res: Response) {
    try {
      if (req) {
        res.status(HttpStatus.CREATED).json({
          message: 'SUCCESS',
        });
      }
    } catch (error) {}
  }

// The below will work only if the incoming body is in the JSON format
@Post("/something")
incomingJsonData(@Body() reqData: Record<string,any>){
  console.log('reqestData', reqData);
  // OUTPUT : reqestData { name: 'Ajit', email: 'ajit09@gmail.com' }
}



}
