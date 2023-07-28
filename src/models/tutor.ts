import { Pets } from '../models/pet'
  
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