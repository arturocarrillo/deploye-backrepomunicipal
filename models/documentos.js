import mongoose, { Schema } from 'mongoose';
const documentosSchema = new Schema({
    titulo: { type: String, maxlength: 50000 },
    descripcion: { type: String, maxlength: 50000 },
    repositorio: { type: String, maxlength: 50000 },
    estado: { type: Number, default: 1 },
    documento: { type: String, maxlength: 50000 },
    createdAt: { type: Date, default: Date.now }
});

const Documentos = mongoose.model('documentos', documentosSchema);
export default Documentos;