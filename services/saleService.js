import Sale from "../models/Sale.js"
import User from "../models/User.js"
import Car from "../models/Car.js"

const createSale = async (data) => {
    const { userId, carId, valorVenda, formaPagamento } = data

    if (!userId || !carId || !formaPagamento) {
        const error = new Error("Informe todos os dados")
        error.statusCode = 400
        throw error
    }

    const user = await User.findById(userId)

    if (!userId || !carId || !formaPagamento) {
        const error = new Error("Id de usuário inválido")
        error.statusCode = 400
        throw error
    }
    const car = await Car.findById(carId)

    if (!userId || !carId || !formaPagamento) {
        const error = new Error("Id do carro inválido")
        error.statusCode = 400
        throw error
    }
    if (car.disponivel === false) {
        const error = new Error("Carro indisponível")
        error.statusCode = 400
        throw error
    }


    if (valorVenda <= 0) {
        const error = new Error("O valor da venda deve ser maior que 0")
        error.statusCode = 400
        throw error
    }

    const sale = await Sale.create({
        userId,
        carId,
        valorVenda,
        formaPagamento
    })

    car.disponivel = false
    await car.save()

    return sale 
    }

const getAllSales = async () => {
    return Sale.find()
    .populate("userId", "nome email")
    .populate("carId")
}

export default {
    createSale,
    getAllSales
}