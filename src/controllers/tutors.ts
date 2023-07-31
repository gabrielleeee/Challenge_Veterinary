import { Request, Response, NextFunction } from 'express';
import { Tutor } from '../models/tutor';
import registerNotFound from "../middlewares/register-not-found";

export const Tutors: Tutor[] = [];

export class TutorController {
  
  createTutor (req: Request, res: Response, next: NextFunction): any  {
    const tutor = req.body;
    
    const newTutor = new Tutor(tutor.id, tutor.name, 
      tutor.phone, 
      tutor.email, 
      tutor.date_of_birth, 
      tutor.zip_code, 
      tutor.pets);

    const isTutorIdExists = (id: number): boolean => {
      return Tutors.some(tutor => tutor.id === id);
    };
    
    if (isTutorIdExists(+tutor.id)) {
      return res.status(400).json({ message: 'Tutor ID is already in use!' });
    }

    Tutors.push(newTutor);
    
    return res.status(200).json({message: 'Tutor created successfully!', createTutor: newTutor});
  }



  getTutors = (req: Request, res: Response, next: NextFunction) => {
    res.send(Tutors);
  }
  

  updateTutor (req: Request, res: Response, next: NextFunction): any {
    const tutorId = req.params.id;
    const updateTutor = req.body;
    const tutorIndex = Tutors.findIndex(tutor => +tutor.id === +tutorId);
    
    if (tutorIndex < 0) {
      return registerNotFound(req, res);
    }

    const foundTutor = Tutors.find(tutor => tutor.id === +tutorId);

    if(!foundTutor){
      return registerNotFound(req, res);
    }

    Tutors[tutorIndex] = new Tutor(
      updateTutor.id, 
      updateTutor.name, 
      updateTutor.phone, 
      updateTutor.email, 
      updateTutor.date_of_birth, 
      updateTutor.zip_code, 
      foundTutor.pets);

    return res.status(200).json({message: 'Tutor updated successfully!', updateTutors: Tutors[tutorIndex]});
    }

  deleteTutor (req: Request, res: Response, next: NextFunction): any {
    const tutorId = req.params.id;
    const tutorIndex = Tutors.findIndex(tutor => +tutor.id === +tutorId);
  
    if (tutorIndex < 0) {
      return registerNotFound(req, res);
    }
  
    Tutors.splice(tutorIndex, 1);
  
    return res.status(200).json({message: 'Tutor deleted successfully!'})
  }
}