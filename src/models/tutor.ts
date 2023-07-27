export class Pets{
    constructor(public id: Number, 
            public name: String, 
            public species: String, 
            public carry: String, 
            public weight: Number, 
            public date_of_birth: Date){
    }
  }
  
  export class Tutor {
    constructor(public id: Number, 
            public name: String, 
            public phone: String, 
            public email: String, 
            public date_of_birth: Date, 
            public zip_code: String, 
            public pets: Pets[]){
    
    }
  }