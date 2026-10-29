import carService from "../services/carService.js"


const getAllCars = async (req, res, next) => {
    try {
        const car = await carService.getAllCars()

        res.status(200).json({
            message: "Carro mostrado com sucesso",
            data: car,
        })
    } catch (error) {
        next(error)
    }
}

const createCar = async (req, res, next) => {
    try {
        const car = await carService.createCar(req.body)

        res.status(201).json({
            message: "Carro criado com sucesso",
            data: car,
        })
    } catch (error) {
        next(error)
    }
}

const getCarById = async (req, res, next) => {
    try {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            message: "Carro mostrado com sucesso",
            data: car,
        })
    } catch (error) {
        next(error)
    }
}

const getCarByPlate = async (req, res, next) => {
    try {
        const car = await carService.getCarByPlate(req.params.plate)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car,
        })
    } catch (error) {
        next(error)
    }
}

const getCarsByBrand = async (req, res, next) => {
    try {
        const car = await carService.getCarsByBrand(req.params.brand)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car,
        })
    } catch (error) {
        next(error)
    }
}

const countAvailableCars = async (req, res, next) => {
    try {
        const car = await carService.countAvailableCars()

        res.status(200).json({
            message: "Quantidades de Carros encontrada com sucesso",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const availableCars = async (req, res, next) => {
    try {
        const car = await carService.availableCars()

        res.status(200).json({
            message: "Carros encontrados",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const getCarsByPriceRange = async (req, res, next) => {
    try {
        const car = await carService.getCarsByPriceRange(req.params.min, req.params.max)

        res.status(200).json({
            message: "Carros encontrados",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const updateCar = async (req, res, next) => {
    try {
        const car = await carService.updateCar(req.params.id, req.body)

        res.status(200).json({
            message: "Carro atualizado",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const updateAvailability = async (req, res, next) => {
    try {
        const car = await carService.updateAvailability(req.params.disponivel, req.body)

        res.status(200).json({
            message: "Carro atualizado",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const car = await carService.deleteCar(req.params.id)

        res.status(200).json({
            message: "Carro atualizado",
            data: car
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createCar,
    getAllCars,
    getCarById,
    getCarByPlate,
    getCarsByBrand,
    countAvailableCars,
    availableCars,
    getCarsByPriceRange,
    updateCar,
    updateAvailability,
    deleteCar
}