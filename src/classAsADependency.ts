import { Injectable } from "@nestjs/common";

@Injectable()
export class ClassAsADependency {
  
  getCat(): string {
    return 'Meow!';
  }
}
