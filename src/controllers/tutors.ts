import { RequestHandler } from "express";
import { Tutor } from '../models/tutor';

export const Tutors: Tutor[] = [];


export const createTutor: RequestHandler = (req, res, next) => {
  const tutor = (req.body as {tutor: Tutor}).tutor;

  const newTutor = new Tutor(tutor.id, tutor.name, 
    tutor.phone, 
    tutor.email, 
    tutor.date_of_birth, 
    tutor.zip_code, 
    tutor.pets);

  Tutors.push(newTutor);

  res.status(200).json({message: 'Tutor criado com sucesso!', createTutor: newTutor});
}

export const getTutors: RequestHandler = (req, res, next) => {
    res.json({tutors: Tutors});
}
  
export const updateTutor: RequestHandler<{id: String}> = (req, res, next) => {
  const tutorId = req.params.id;
  const updateTutor = (req.body as {tutor: Tutor}).tutor;
  const tutorIndex = Tutors.findIndex(tutor => +tutor.id === +tutorId);

  if (tutorIndex < 0) {
    throw new Error('Não foi possível encontrar o tutor!');
  }

  Tutors[tutorIndex] = new Tutor(updateTutor.id, 
    updateTutor.name, 
    updateTutor.phone, 
    updateTutor.email, 
    updateTutor.date_of_birth, 
    updateTutor.zip_code, 
    updateTutor.pets);

  res.status(200).json({message: 'Tutor atualizado com sucesso!', updateTutors: Tutors[tutorIndex]});
}

export const deleteTutor: RequestHandler = (req, res, next) => {
    const tutorId = req.params.id;
    const tutorIndex = Tutors.findIndex(tutor => +tutor.id === +tutorId);

    if (tutorIndex < 0) {
        throw new Error('Não foi possível encontrar o tutor!');
    }

    Tutors.splice(tutorIndex, 1);

    res.status(200).json({message: 'Tutor deletado com sucesso!'})
}