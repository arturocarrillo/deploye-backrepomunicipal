import mongoose, { Schema } from 'mongoose';
const repositoriosSchema = new Schema({
    repositorio: { type: String, maxlength: 64 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const Repositorios = mongoose.model('repositorios', repositoriosSchema);
export default Repositorios;