import { Pets } from '../models/pet'
 
export class Tutor {
    id: Number;
    name: String;
    phone: String; 
    email: String; 
    date_of_birth: Date; 
    zip_code: String;
    pets: Pets[];

    constructor( id: Number, name: String, phone: String, email: String, date_of_birth: Date, zip_code: String, pets: Pets[] = []){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.zip_code = zip_code;
        this.pets = pets;
    }
            
    
}

