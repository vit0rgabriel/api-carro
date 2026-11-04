
import express from "express"
import saleController from "../controllers/saleController.js"


const router = express.Router()

router.post(
    "/",
    saleController.createSale
)

router.get(
    "/",
    saleController.getAllSales
)

router.get(
    "/:id",
    saleController.getSaleById
)

router.get(
    "/count/sales",
    saleController.countSales
)

router.get(
    "/user/:userId",
    saleController.getSaleByUserId
)

router.get(
    "/car/:carId",
    saleController.getSaleByCarId
)

router.get(
    "/value/:min/:max",
    saleController.getSaleByValue
)

router.get(
    "/date/:date",
    saleController.getSalesByDate
)

router.put(
    "/:id/update",
    saleController.updateSale
)

router.patch(
    "/:id/status",
    saleController.updateStatus
)

router.delete(
    "/:id/delete",
    saleController.deleteSale
)

export default router;