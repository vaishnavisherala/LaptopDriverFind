import { Router } from 'express';
import { listCompanies, searchDrivers, getDriverById } from '../controllers/driverController';
const router = Router();
router.get('/companies', listCompanies);
router.get('/id/:id', getDriverById);
router.get('/:company', searchDrivers);
export default router;
