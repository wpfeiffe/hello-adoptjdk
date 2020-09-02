export class Contact {
    constructor(
       public id: number,
       public firstName: string,
       public lastName: string,
       public middleName: string,
       public honorific: string,
       public title: string,
       public cellPhone: string,
       public landPhone: string,
       public active: boolean,
       public birthday: Date
    ) { }
}
