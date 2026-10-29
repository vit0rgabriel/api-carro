import express from "express"
import carController from "../controllers/carController.js"


const router = express.Router()

router.get(
    "/",
    carController.getAllCars
)

router.post(
    "/",
    carController.createCar
)

router.get(
    "/:id",
    carController.getCarById
)

router.get(
    "/plate/:plate",
    carController.getCarByPlate
)

router.get(
    "/brand/:brand",
    carController.getCarsByBrand
)

router.get(
    "/available/count",
    carController.countAvailableCars
)


router.get(
    "/available/cars",
    carController.availableCars
)

router.get(
    "/price/:min/:max",
    carController.getCarsByPriceRange
)

router.put(
    "/:id",
    carController.updateCar
)


router.patch(
    "/:id/availability",
    carController.updateAvailability
)

router.delete(
    "/:id/delete",
    carController.deleteCar
)

export default router;