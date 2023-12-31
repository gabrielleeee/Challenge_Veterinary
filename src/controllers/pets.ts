import { Pets } from '../models/pet';
import { Tutors } from '../controllers/tutors';
import registerNotFound from "../middlewares/register-not-found";
import { Request, Response, NextFunction } from 'express';

export class PetController{

  createPet (req: Request, res: Response, next: NextFunction): any {
    const pet = req.body;
    const tutorId = req.params.tutorId;
    
    const tutor = Tutors.find(tutor => tutor.id === +tutorId);
    
    if (!tutor) {
      return registerNotFound(req, res);
    }

    if (tutor.pets.some(existingPet => existingPet.id === pet.id)) {
      return res.status(400).json({ message: 'Pet ID is already in use for this tutor!' });
    }

    const newPet = new Pets(
        pet.id,
        pet.name, 
        pet.species, 
        pet.carry, 
        pet.weight, 
        pet.date_of_birth);
   
    tutor?.pets.push(newPet);

    return res.status(200).json({message: 'New pet created successfully!', createPet: newPet});
  }

  updatePet (req: Request, res: Response, next: NextFunction): any {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;
    const pet = req.body;
    const foundTutor = Tutors.find(tutor => tutor.id === +tutorId);
    const foundPet = foundTutor?.pets.find(pet => pet.id === +petId);
    
    if(!foundTutor || !foundPet){
      return registerNotFound(req, res);
    }
    
    const petIndex = foundTutor?.pets.findIndex(pet => +pet.id === +petId);
    
    const updatedPet = new Pets(
      pet.id,
      pet.name, 
      pet.species, 
      pet.carry, 
      pet.weight, 
      pet.date_of_birth);
      
    foundTutor.pets[petIndex] = updatedPet;

    return res.status(200).json({message: 'Pet updated successfully!', updatePet: updatedPet});
  }

  deletePet (req: Request, res: Response, next: NextFunction): any {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;
    const foundTutor = Tutors.find(tutor => tutor.id === +tutorId);
    const foundPet = foundTutor?.pets.find(pet => pet.id === +petId);
    
    if(!foundTutor || !foundPet){
      return registerNotFound(req, res);
    }
    
    const petIndex = foundTutor?.pets.findIndex(pet => +pet.id === +petId);
  
    foundTutor.pets.splice(petIndex, 1)
    
    return res.status(200).json({message: 'Pet deleted successfully!'})
  }
}