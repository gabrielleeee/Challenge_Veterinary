import { Request, Response, NextFunction } from 'express';
import { Pets } from '../models/pet';
import { Tutors } from '../controllers/tutors';
import registerNotFound from "../middlewares/register-not-found";

export const createPet = (req: Request, res: Response, next: NextFunction) => {
    const pet = (req.body as {pet: Pets}).pet;
    const tutorId = req.params.tutorId;
    const tutor = Tutors.find(tutor => tutor.id === +tutorId);

    if (!tutor) {
      return res.status(404).json({ message: 'Tutor não encontrado!' });
    }

    if (tutor.pets.some(existingPet => existingPet.id === pet.id)) {
      return res.status(400).json({ message: 'ID do pet já está em uso para este tutor!' });
    }

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

export const updatePet = (req: Request, res: Response, next: NextFunction) => {
  const tutorId = req.params.tutorId;
  const petId = req.params.petId;
  const pet = (req.body as {pet: Pets}).pet;
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

  res.status(200).json({message: 'Pet atualizado com sucesso!', updatePet: updatedPet});
}

export const deletePet = (req: Request, res: Response, next: NextFunction) => {
    const tutorId = req.params.tutorId;
    const petId = req.params.petId;
    const foundTutor = Tutors.find(tutor => tutor.id === +tutorId);
    const foundPet = foundTutor?.pets.find(pet => pet.id === +petId);
    
    if(!foundTutor || !foundPet){
      return registerNotFound(req, res);
    }
    
    const petIndex = foundTutor?.pets.findIndex(pet => +pet.id === +petId);
  
    foundTutor.pets.splice(petIndex, 1)
    
    res.status(200).json({message: 'Pet deletado com sucesso!'})
}