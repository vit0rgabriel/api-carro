import Car from "../models/Car.js"

const getAllCars = async () => {
    return Car.find()
}

const createCar = async (data) => {
    const { modelo, marca, ano, preco, placa } = data

    if (!modelo || !marca || !placa) {
        const error = new Error("Modelo, Marca e Placa são obrigatórios")
        error.statusCode = 400
        throw error
    }

    const carExists = await Car.findOne({ placa })

    if (carExists) {
        const error = new Error("Placa já utilizada")
        error.statusCode = 400
        throw error
    }

    const car = await Car.create({
        modelo,
        marca,
        ano,
        preco,
        placa
    })

    return {
        _id: car._id,
        modelo: car.modelo,
        marca: car.marca,
        ano: car.ano,
        preco: car.preco,
        placa: car.placa,
        createdAt: car.createdAt,
        updatedAt: car.updatedAt
    }
}

const getCarById = async (id) => {
    const car = await Car.findById(id);

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByPlate = async (placa) => {
    const car = await Car.findOne({ placa })


    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarsByBrand = async (marca) => {
    const car = await Car.find({ marca })

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const countAvailableCars = async () => {
    return Car.countDocuments()
}

const availableCars = async () => {
    const car = await Car.find({ disponivel: true })

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarsByPriceRange = async (min, max) => {
    const car = await Car.find({
        preco: { 
            $lt: Number(max), 
            $gt: Number(min) 
        }
    })

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const updateCar = async () => {

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
updateCar
}