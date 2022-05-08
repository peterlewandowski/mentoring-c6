import { Router } from 'express'
import { welcomeMessage, getAllCars } from '../services/saturdayclass.services.js'


export const router = Router()

// READ
router.get('/', welcomeMessage)

router.get('/', getAllCars)