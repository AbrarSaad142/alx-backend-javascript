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

