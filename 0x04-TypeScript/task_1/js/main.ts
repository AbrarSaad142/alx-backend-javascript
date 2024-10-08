interface Teacher {
    [key: string]: any;
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
}

  interface Directors extends Teacher{
    numberOfReport: number;
  }
const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework = () : string => 'Currently working';

    displayName = () : string => this.firstName;
  }

interface StudentClassConstructor {
    (firstName: string, lastName: string): StudentClass;
  }
  
  const student = new StudentClass("Paul", "jerry");
  console.log(student.displayName())
  console.log(student.workOnHomework())
