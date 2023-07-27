import { RequestHandler } from "express";
import { Pets } from '../models/tutor';
import { Tutors } from '../controllers/tutors';
import registerNotFound from "../middlewares/register-not-found";

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

export const updatePet: RequestHandler = (req, res, next) => {
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

export const deletePet: RequestHandler = (req, res, next) => {
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