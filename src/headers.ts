import { Controller, Get , Headers } from "@nestjs/common";

@Controller("/image")
export class HeadersController {

    @Get("/header")
    getHeader(@Headers() headers:Record<string,any>){
        console.log(headers);
    }
}

/**
 *  This is the type of data we are getting from the headers
 */

//  {
//   'user-agent': 'PostmanRuntime/7.36.3',
//   accept: '*/*',
//   'cache-control': 'no-cache',
//   'postman-token': '76007af3-aa73-4469-9f28-01af8a75a3fa',
//   host: 'localhost:3000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive'
// }