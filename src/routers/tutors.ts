import { Router } from 'express';
import { TutorController } from '../controllers/tutors';

const router = Router();
const tutorController = new TutorController();

router.get('/tutors', tutorController.getTutors);

router.post('/tutor', tutorController.createTutor);

router.put('/tutor/:id', tutorController.updateTutor);

router.delete('/tutor/:id', tutorController.deleteTutor);


export default router;