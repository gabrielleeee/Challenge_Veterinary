import { Router } from 'express';
import { PetController } from '../controllers/pets';

const router = Router();
const petController = new PetController();

router.post('/pet/:tutorId', petController.createPet);

router.put('/pet/:petId/tutor/:tutorId', petController.updatePet);

router.delete('/pet/:petId/tutor/:tutorId', petController.deletePet);

export default router;