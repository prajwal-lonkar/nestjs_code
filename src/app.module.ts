import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumController } from './routeParameters.controller';
import { HeadersControllers } from './queryParameters.controller';
import { HeadersController } from './headers';
import { BodyDataAccess } from './bodyDataAccess';
import { ClassAsADependency } from './classAsADependency';
import { InjectingDependencyString } from './injectingDependencyString';
import { DynanicInjectionController } from './dynamicInjectionController';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = true;

@Module({
  imports: [],
  controllers: [
    UsersController,
    AlbumController,
    HeadersControllers,
    HeadersController,
    BodyDataAccess,
    InjectingDependencyString,
    DynanicInjectionController
  ],
  providers: [
    ClassAsADependency, // for class
    { provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT' }, // for string
    { provide: 'MAIL', useValue: ['abc@gmail.com', 'xyz@gmail.com'] }, // for array
    { provide: 'OBJECT', useValue: { key: 'value1', key2: 'value2' } }, // for object

    {
      provide: 'CONDITIONAL',
      useFactory: () => {
        const eventBus = IS_DEV_MODE 
        ? new ReplaySubject(2)
        : new BehaviorSubject(null);

        return eventBus;
      },
    },
  ],
})
export class AppModule {}

// Here in the providers we provided directly the class name because our injection token name and class name is the same.
// Here DATABASE_NAME is injection token
