import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema(
    {
        "titulo": String,
        "descricao": String,
        "solicitante": String,
        "categoria": String,
        "prioridade": String,
        "status": String,
        dataAbertura: {
            type: Date,
            default: Date.now
        }
    },
    { collection: "cars" }
);

export default mongoose.model("cars", CarsSchema)