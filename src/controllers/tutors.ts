import { RequestHandler } from "express";
import { Tutor } from '../models/tutor';

export const Tutors: Tutor[] = [];


export const createTutor: RequestHandler = (req, res, next) => {
  const tutor = (req.body as {tutor: Tutor}).tutor;
  const newTutor = new Tutor(Tutors.length + 1, tutor.name, 
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
  