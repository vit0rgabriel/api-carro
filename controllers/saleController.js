import saleService from "../services/saleService.js"

const createSale = async (req, res, next) => {
    try {
        const sale = await saleService.createSale(req.body)

        res.status(201).json({
            message: "Venda criada com sucesso",
            data: sale,
        })
    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req, res, next) => {
    try {
        const vendas = await saleService.getAllSales()

        res.status(201).json({
            message: "Vendas encontradas com sucesso",
            data: vendas,
        })
    } catch (error) {
        next(error)
    }
}

const getSaleById = async (req, res, next) => {
    try {
        const sales = await saleService.getSaleById(req.params.id)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sales,
        })

    } catch (error) {
        next(error)
    }
}

const countSales = async (req, res, next) => {
    try {
        const sales = await saleService.countSales()

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sales,
        })
    } catch (error) {
        next(error)
    }
}

const getSaleByUserId = async (req, res, next) => {
    try {
        const sale = await saleService.getSaleByUserId(req.params.userId)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const getSaleByCarId = async (req, res, next) => {
    try {
        const sale = await saleService.getSaleByCarId(req.params.carId)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const getSaleByValue = async (req, res, next) => {
    try {
        const sale = await saleService.getSaleByValue(req.params.min, req.params.max)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const updateSale = async (req, res, next) => {
    try {
        const sale = await saleService.updateSale(req.params.id, req.body)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const sale = await saleService.updateStatus(req.params.id, req.body)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const deleteSale = async (req, res, next) => {
    try {
        const sale = await saleService.deleteSale(req.params.id)

        res.status(200).json({
            message: "Vendas encontradas com sucesso",
            data: sale
        })
    } catch (error) {
        next(error)
    }
}

const getSalesByDate = async (req, res, next) => {
    try {
        const sale = await saleService.getSalesByDate(req.params.date)


            res.status(200).json({
                message: "Vendas encontradas com sucesso",
                data: sale
            })
    } catch (error) {
        next(error)
    }
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
    getSalesByDate
}