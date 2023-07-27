import { RequestHandler } from "express";
import { Pets } from '../models/tutor';
import { Tutors } from '../controllers/tutors';


export const createPet: RequestHandler = (req, res, next) => {
    const pet = (req.body as {pet: Pets}).pet;
    const tutorId = req.params.tutorId;
    const tutor = Tutors.find(tutor => tutor.id === +tutorId);
    const newPet = new Pets(
        pet.id,
        pet.name, 
        pet.species, 
        pet.carry, 
        pet.weight, 
        pet.date_of_birth);
        
   
    tutor?.pets.push(newPet);

    res.status(200).json({message: 'Novo pet criado com sucesso!', createPet: newPet});
}