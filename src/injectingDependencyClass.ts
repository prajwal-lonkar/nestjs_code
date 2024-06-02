import { Controller, Get } from '@nestjs/common';
import { ClassAsADependency } from './classAsADependency';

@Controller('cat')
export class DependentClass {
  constructor(private dependency: ClassAsADependency) {
    console.log(this.dependency);
  }
}

/**
 * Points to remember during using Injections
 *
 * - Whenever we inject any class as a dependency  , that should be mentioned inside the providers section
 *   in the app.module.ts file .
 */
