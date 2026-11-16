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

const getSaleById = async (id) => {
    const sale = await Sale.findById(id);

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const countSales = async () => {
    return Sale.countDocuments()
}

const getSaleByUserId = async (userId) => {
    const sale = await Sale.findOne({ userId })

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const getSaleByCarId = async (carId) => {
    const sale = await Sale.findOne({ carId })

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const getSaleByValue = async (min, max) => {
    const sale = await Sale.find({
        valorVenda: { $lt: max, $gt: min }
    })

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const updateSale = async (id, data) => {
    const sale = await Sale.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const updateStatus = async (id, data) => {
    const sale = await Sale.findByIdAndUpdate(id, data)

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const deleteSale = async (id) => {
    const sale = await Sale.findByIdAndDelete(id)

    if (!sale) {
        const error = new Error("Venda não encontrada")
        error.statusCode = 404
        throw error
    }

    return sale
}

const getSaleByDate = async (date) => {
    let inicio = new Date(date)
    let fim = new Date(inicio)

    if (date.lenght === 4) {
        inicio = new Date(`${date}-01-01`)
        fim = new Date(`${Number(date) + 1}-01-01`)
    } else {
        fim.setUTCDate(fim.getUTCDate() + 1)
    }

    return Sale.find({
        dataVenda: {
            $gte: inicio,
            $lt: fim
        }
    })
}

export default {
    createSale,
    getAllSales,
    getSaleById,
    countSales,
    getSaleByUserId,
    getSaleByCarId,
    getSaleByValue,
    updateSale,
    updateStatus,
    deleteSale,
    getSaleByDate
}