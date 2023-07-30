export class Pets{
    id: Number;
    name: String; 
    species: String; 
    carry: String; 
    weight: Number;
    date_of_birth: Date;

    constructor(id: Number, name: String, species: String, carry: String, weight: Number, date_of_birth: Date){
        this.id = id;
        this.name = name;
        this.species = species;
        this.carry = carry;
        this.weight = weight;
        this.date_of_birth = date_of_birth;
    }

}