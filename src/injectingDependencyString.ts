import { Controller, Inject } from '@nestjs/common';

@Controller()
class InjectingDependencyString {
  constructor(@Inject('DATABASE_NAME') private dbname: string) {
    console.log(this.dbname);
  }

  /**
   *  Here we cannot have multiple constructors but if we implement the below
   *  constructor only then we will get the log of the array.
   */
  // constructor(@Inject('MAILS') private emails: string[]) {
  //   console.log(this.emails);
  // }

  /**
   *  Here for the below constructor implementation we will get the object
   *
   * constructor(@Inject('OBJECT') private obj:Record<string,any>){
   *    console.log(this.obj)
   * }
   */
}
