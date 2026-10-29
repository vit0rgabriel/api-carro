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
        next (error)
    }
}

export default {
    createSale,
    getAllSales
}