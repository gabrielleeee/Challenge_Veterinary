import { Router } from 'express';
import { createTutor, getTutors, updateTutor, deleteTutor } from '../controllers/tutors';

const router = Router();

router.get('/tutors', getTutors);

router.post('/tutor', createTutor);

router.put('/tutor/:id', updateTutor);

router.delete('/tutor/:id', deleteTutor);

router.post('/pet/:tutorId');

router.put('/pet/:petId/tutor/:tutorId');

router.delete('/pet/:petId/tutor/:tutorId');

export default router;